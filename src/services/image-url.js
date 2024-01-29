import noImage from "../assets/no_image.svg";

const getCroppedImageUrl = (url) => {
  if (!url) return noImage;
  let cropped = url.replace("media/", "media/crop/600/400/");
  return cropped;
};

export default getCroppedImageUrl;
