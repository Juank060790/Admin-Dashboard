import { toast } from "react-toastify";

export const infoAlert = (message, position) => {
  const color = localStorage.getItem("themeMode", "theme-mode-light");
  let themeColor;
  if (color === "theme-mode-dark") {
    themeColor = "light";
  } else {
    themeColor = "dark";
  }

  console.log("color :>> ", themeColor);
  return toast.info(message, {
    position: position,
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: themeColor,
  });
};
