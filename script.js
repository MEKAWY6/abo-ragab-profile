// 1. تحديث السنة في الفوتر بشكل ديناميكي
document.getElementById("currentYear").textContent = new Date().getFullYear();

// 2. استخدام Intersection Observer لعمل Scroll Animations
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.15, // الأكشن يشتغل لما 15% من العنصر يظهر في الشاشة
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    // لو العنصر ظهر في الـ Viewport
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      // بنوقف مراقبة العنصر ده عشان الأنيميشن مايشتغلش تاني لو اليوزر طلع ونزل
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// تفعيل المراقب على كل العناصر اللي واخدة كلاس hidden
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// 3. دالة نسخ أرقام الدفع وحساب Instapay بسهولة (الإضافة الجديدة)
function copyText(text, btnElement) {
  navigator.clipboard.writeText(text).then(() => {
    const originalText = btnElement.textContent;
    btnElement.textContent = "تم النسخ ✓";
    btnElement.style.background = "#e67e22"; // تغيير اللون مؤقتاً لتأكيد النسخ
    
    setTimeout(() => {
      btnElement.textContent = originalText;
      btnElement.style.background = "#27ae60"; // الرجوع للون الأساسي
    }, 2000);
  }).catch((err) => {
    console.error("فشل النسخ: ", err);
  });
}