$(function () {
    $(".gallery__list").slick({
      centerMode: true,
      slidesToShow: 3,
      prevArrow: `<button class="gallery__slider-arrow gallery__slider-arrow--prev">
          <svg
            class="gallery__slider-arrow__img"
            width="63"
            height="63"
            viewBox="0 0 63 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36 16L19 32.5L36 49"
              stroke="url(#paint0_linear)"
              stroke-width="6"
              stroke-linecap="round"
            />
            <circle
              cx="31.5"
              cy="31.5"
              r="29"
              stroke="url(#paint1_linear)"
              stroke-width="5"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="27.0627"
                y1="4.50893"
                x2="55.6254"
                y2="15.9188"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#74B5B9" />
                <stop
                  offset="0.996946"
                  stop-color="#14D9B5"
                  stop-opacity="0.87"
                />
              </linearGradient>
              <linearGradient
                id="paint1_linear"
                x1="29.8794"
                y1="-21.9375"
                x2="106.53"
                y2="37.5003"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#74B5B9" />
                <stop
                  offset="0.996946"
                  stop-color="#14D9B5"
                  stop-opacity="0.87"
                />
              </linearGradient>
            </defs>
          </svg>
        </button>`,
      nextArrow: `<button class="gallery__slider-arrow gallery__slider-arrow--next">
          <svg
            class="gallery__slider-arrow__img"
            width="63"
            height="63"
            viewBox="0 0 63 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27 16L44 32.5L27 49"
              stroke="url(#paint0_linear)"
              stroke-width="6"
              stroke-linecap="round"
            />
            <circle
              r="29"
              transform="matrix(-1 0 0 1 31.5 31.5)"
              stroke="url(#paint1_linear)"
              stroke-width="5"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="35.9373"
                y1="4.50893"
                x2="7.37462"
                y2="15.9188"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#74B5B9" />
                <stop
                  offset="0.996946"
                  stop-color="#14D9B5"
                  stop-opacity="0.87"
                />
              </linearGradient>
              <linearGradient
                id="paint1_linear"
                x1="29.8794"
                y1="-21.9375"
                x2="106.53"
                y2="37.5003"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#74B5B9" />
                <stop
                  offset="0.996946"
                  stop-color="#14D9B5"
                  stop-opacity="0.87"
                />
              </linearGradient>
            </defs>
          </svg>
        </button>`,
      dots: true,
      responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 660,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

    //tabs
    $(".tab").on("click", function (evt) {
      evt.preventDefault();
      $($(this).siblings()).removeClass("tab--active");
      $($(this).parent().next().children()).removeClass(
        "tabs-content--active"
      );
      $(this).addClass("tab--active");

      $($(this).parent().next().find($(this).attr("href"))).addClass(
        "tabs-content--active"
      );
 
    });

    //header
    $(".header__open-menu-btn").on('click', function(){
      $(".main-nav").toggleClass("main-nav--active");
    });

});


