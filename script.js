// 平滑滚动功能
document.addEventListener('DOMContentLoaded', function() {
    // 导航栏平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 滚动动画效果
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    // 观察所有需要动画的元素
    const animatedElements = document.querySelectorAll('.experience-card, .skill-tag');
    animatedElements.forEach((el) => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        observer.observe(el);
    });

    // 移动端导航栏响应（可选扩展）
    // 可以在此添加移动端菜单切换逻辑
});