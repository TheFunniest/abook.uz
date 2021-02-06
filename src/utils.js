export const secondsToHms = (d) => {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor((d % 3600) / 60);

  var hDisplay = h > 0 ? h + (h === 1 ? m ? " час, " : " час" : " часа, ") : "";
  var mDisplay = m > 0 ? m + (m === 1 ? " минута, " : " минут") : "";
  return hDisplay + mDisplay;
};

export const findLang = (lang) => {
  switch (lang) {
    case "uz":
      return "Узбекский";
    case "ru":
      return "Русский";
    case "en":
      return "Английский";
    default:
      return "Узбекский";
  }
};
