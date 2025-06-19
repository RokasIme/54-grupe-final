export function formatMovieDuration(duration) {
  if (duration < 60) {
    return `${duration} mins`;
  }

  return `${Math.floor(duration / 60)} h ${duration % 60} mins`;
}
