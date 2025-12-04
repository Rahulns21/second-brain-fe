String.prototype.toSentenceCase = function () {
  const trimmed = this.trimStart();
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
};
