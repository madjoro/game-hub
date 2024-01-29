const getCroppedImageUrl = (url) => {
  if (!url) return "";
  let cropped = url.replace("media/", "media/crop/600/400/");
  return cropped;
};

export default getCroppedImageUrl;
