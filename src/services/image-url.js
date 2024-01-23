const getCroppedImageUrl = (url) => {
  let cropped = url.replace("media/", "media/crop/600/400/");
  return cropped;
};

export default getCroppedImageUrl;
