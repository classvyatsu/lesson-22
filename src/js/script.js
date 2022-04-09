/*jshint esversion: 6 */
//select header
const selectHeader = document.querySelector(".select__header");
const selectBody = document.querySelector(".select__body");
const selectItem = document.querySelectorAll(".select__item");
const selectSpan = document.querySelector(".select__title");
const selectImg = document.querySelector(".select__header img");

selectHeader.addEventListener("click", () => {
  if (selectBody.classList.contains("select__body--active")) {
    selectBody.classList.remove("select__body--active");
    selectImg.style.transform = "rotate(0deg)";
    selectBody.style.maxHeight = null;
  } else {
    selectBody.classList.add("select__body--active");
    selectImg.style.transform = "rotate(180deg)";
    selectBody.style.maxHeight = selectBody.scrollHeight + "px";
  }
});

selectItem.forEach((item) => {
  item.addEventListener("click", () => {
    selectSpan.textContent = item.textContent;
    selectBody.classList.remove("select__body--active");
    selectImg.style.transform = "rotate(0deg)";
    selectBody.style.maxHeight = null;
  });
});

//maps

let center = [55.67555451365476, 37.50218546744996];
function init() {
  let map = new ymaps.Map("map-element", {
    center: center,
    zoom: 11,
  });

  let playsmark = new ymaps.Placemark(
    center,
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/maps/mark-cart.svg",
      iconImageSize: [70, 100],
      iconImageOffset: [-40, 70],
    }
  );

  map.controls.remove("geolocationControl"); // удаляем геолокацию
  map.controls.remove("searchControl"); // удаляем поиск
  map.controls.remove("trafficControl"); // удаляем контроль трафика
  map.controls.remove("typeSelector"); // удаляем тип
  map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove("zoomControl"); // удаляем контрол зуммирования
  map.controls.remove("rulerControl"); // удаляем контрол правил
  map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты

  map.geoObjects.add(playsmark);
}

ymaps.ready(init);
