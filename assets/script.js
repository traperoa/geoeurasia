let currentLang = "en";

  $("#lang-toggle").click(function () {
    currentLang = currentLang === "en" ? "ka" : "en";
    $("[data-en]").each(function () {
      const text = $(this).data(currentLang);
      if (text) $(this).text(text);
    });
    $(this).text(currentLang === "en" ? "English" : "ქართული");
  });
  $("#mobile-menu").click(function () {
    $(".nav").toggleClass("mobile-nav");
    $(this).toggleClass("is-active");
  });