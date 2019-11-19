// variables
const main = $(".main");
const body = $("body");
const html = $("html");
const hamburger = $(".hamburger");
const sidenav = $(".sidenav");
const desktopNav = $(".navigation");
const desktopLinks = $(".navigation__item");
const desktopNavWrapper = $(".navigation__wrapper");
const socialIcon = $(".navigation__social__icon");
const navLogo = $(".navigation__logo");
const parallax = $(".parallax");
const modalBody = $(".modal-body");
const modalTrigger = $("#exampleModalPreview");

$(document).ready(function() {
  $("#hamburger").click(handleNavAnimationClick);
});

$(window).on('load', function(){
  $('.loading').fadeOut('slow');
})

// Handle all scroll events
$(document).scroll(function() {
  $(this).scrollTop() > 10
    ? ($(desktopNav).addClass("navigation__nav-scrolled"),
      $(desktopLinks).addClass("navigation__links-scrolled"),
      $(socialIcon).addClass("navigation__links-scrolled"),
      $(desktopNavWrapper).addClass("navigation__wrapper__scrolled"),
      $(navLogo).addClass("navigation__logo__scrolled"))
    : ($(desktopNav).removeClass("navigation__nav-scrolled"),
      $(desktopLinks).removeClass("navigation__links-scrolled"),
      $(socialIcon).removeClass("navigation__links-scrolled"),
      $(desktopNavWrapper).removeClass("navigation__wrapper__scrolled"),
      $(navLogo).removeClass("navigation__logo__scrolled"));

  fadeInAnimation();
});

// Handle Sidenav hamburger click
handleNavAnimationClick = () => {
  if ($(hamburger).hasClass("on")) {
    $(hamburger).removeClass("on");
    $(sidenav).removeClass("sidenav-transform-x");
    $(main).removeClass("main-transform-x");
    $(body).removeClass("no-scroll");
    $(html).removeClass("no-scroll");
  } else {
    $(hamburger).addClass("on");
    $(sidenav).addClass("sidenav-transform-x");
    $(main).addClass("main-transform-x");
    $(body).addClass("no-scroll");
    $(html).addClass("no-scroll");
  }
};

$.fn.scrollView = function() {
  return this.each(function() {
    $("html, body").animate(
      {
        scrollTop: $(this).offset().top
      },
      1000
    );
  });
};

$(".navigation__logo, .footer__logo").on("click", e => {
  e.preventDefault();
  $("#hero").scrollView();
});

$(".about-link-sidenav").on("click", e => {
  e.preventDefault();
  handleNavAnimationClick();
  $("#about").scrollView();
});

$(".work-link-sidenav").on("click", e => {
  e.preventDefault();
  handleNavAnimationClick();
  $(".art").scrollView();
});

$(".skills-link-sidenav").on("click", e => {
  e.preventDefault();
  handleNavAnimationClick();
  $(".skills").scrollView();
});

$(".contact-link-sidenav").on("click", e => {
  e.preventDefault();
  handleNavAnimationClick();
  $("#footer").scrollView();
});

$(".about-link").on("click", e => {
  e.preventDefault();
  $("#about").scrollView();
});

$(".work-link, .hero__button, .about__btn--more").on("click", e => {
  e.preventDefault();
  $(".art").scrollView();
});

$(".skills-link").on("click", e => {
  e.preventDefault();
  $("#skills").scrollView();
});

$(".contact-link").on("click", e => {
  e.preventDefault();
  $("#footer").scrollView();
});

// Pull data to dynamically create art cards in Work section
const data = [
  {
    id: 1,
    pic: "/img/ps-site.png",
    name: "Pocket Statz",
    description: `Pocket Statz is application that allows the user to quickly check the stats of their favorite NBA or NHL teams.<br><br>

      Pocket Statz is built on a LAMP stack with a ReactJS Front-End. Redux is used in conjunction with ReactJS so that state can easily be shared and modified throughout multiple components of the application. React Router DOM was utilized to make Pocket Statz a single page application for a better user experience. Redux Forms is used so the users can create accounts and sign in while Materialize helped style the components.<br><br>
      
      The Back-End runs an Apache server and utilizes PHP to store and retrieve the user's team data to and from the MySQL database. PHP and MySQL is also handling validation and user authentication.`,
    url: "https://pocketstatz.com",
    price: "ReactJS, Redux, Javascript, HTML, SASS, PHP, MySQL"
  },
  {
    id: 2,
    pic: "/img/hd-site.png",
    name: "Huntington Digital, LLC",
    description: `Website carefully created and designed specifically for Huntington Digital, LLC.<br><br>
      Huntington Digital was built utilizing vanilla Javascript for the Front-End and PHP for the Back-End running on an Apache server. My duties included UI/UX design, implementation of existing wireframe to code, custom animations, and deployment.`,
    url: "https://www.huntingtondigitaloc.com",
    price: "Javascript, HTML, CSS, PHP"
  },
  {
    id: 3,
    pic: "/img/hanna-site.png",
    name: "Hanna Jennings Art",
    description: `Personal website designed and constructed for the artist Hanna Jennings.<br><br>
      SASS is utilizing BEM methodology to optimize clean, readable, and reusable code.<br><br>
      Dynamic content is being handled by the following APIs: Etsy, Instagram, & Medium. My duties included creation of wireframe, UI/UX design, content creation, building site according to wireframe, debugging, and deployment.`,
    url: "http://hanna.huntingtondigitaloc.com",
    price: "Javascript, HTML, SASS, NPM"
  }
];

const buildWorkCard = art => {
  const div = $("<div>");
  const name = $("<h3>");
  const a = $("<a>");
  const img = $("<img>");
  const description = $("<p>");
  const materials = $("<p>");
  const price = $("<h3>");
  const button = $("<a>Visit Site</a>");

  button.attr({
    class: "general-btn art__row__button",
    href: art.url,
    target: "_blank"
  });

  const artRow = $(".art__row");
  artRow.append(div);
  name.append(art.name);
  description.append(art.description);
  price.append(art.price);
  materials.append(art.materials);
  div.append(img);
  div.append(name, button, description, price);

  description.attr("class", "art__row__text");
  price.attr("class", "art__row__price");

  name.attr("class", "art__name");

  a.attr("href", art.url);
  img.attr({
    src: art.pic,
    class: "art__row__image"
  });
  div.attr("class", "art__row__container");
};

data.forEach(art => buildWorkCard(art));

function fadeInAnimation() {
  let fadeImage = $(".photos__gray--container__photo");
  let windowHeight = $(window).outerHeight();
  let windowTopPosition = $(window).scrollTop();
  let windowBottomPosition = windowTopPosition + windowHeight;

  $.each(fadeImage, function() {
    var el = $(this);
    var elHeight = el.outerHeight();
    var elTopPosition = el.offset().top;
    var elBottomPosition = elTopPosition + elHeight;

    if (
      elBottomPosition >= windowTopPosition &&
      elTopPosition <= windowBottomPosition
    ) {
      el.addClass("o-fade");
    } else {
      el.removeClass("o-fade");
    }
  });
}
