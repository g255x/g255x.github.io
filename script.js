document.addEventListener('DOMContentLoaded', function() {
    // 导航栏切换
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        this.querySelector('.hamburger').classList.toggle('active');
    });
    
    // 页面切换
    const navLinksAll = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    
    navLinksAll.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 更新导航栏活动状态
            navLinksAll.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
            
            // 如果是移动端，点击后关闭菜单
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                navToggle.querySelector('.hamburger').classList.remove('active');
            }
            
            // 获取目标页面ID
            const targetId = this.getAttribute('data-page');
            
            // 隐藏所有页面
            pages.forEach(page => {
                page.classList.remove('active');
                
                // 重置动画
                const content = page.querySelector('.page-content');
                if (content) {
                    content.classList.remove('animate-in');
                    void content.offsetWidth; // 触发重绘
                }
            });
            
            // 显示目标页面
            const targetPage = document.getElementById(targetId);
            targetPage.classList.add('active');
            
            // 应用动画
            const targetContent = targetPage.querySelector('.page-content');
            if (targetContent) {
                setTimeout(() => {
                    targetContent.classList.add('animate-in');
                }, 50);
            }
            
            // 平滑滚动到顶部
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
    
    // 表单提交
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 这里可以添加表单验证和提交逻辑
            alert('消息已发送！我会尽快回复你。');
            this.reset();
        });
    }
    

    // 社交卡片点击效果
    const socialCards = document.querySelectorAll('.social-card');
    socialCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            // 这里可以添加跳转到社交平台的逻辑
            alert('将跳转到对应的社交平台');
        });
    });
    // 滚动时导航栏效果
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('.main-nav');
        if (window.scrollY > 50) {
            nav.style.padding = '1rem 5%';
            nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.padding = '1.5rem 5%';
            nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
});
