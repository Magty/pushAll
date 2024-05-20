const Interval = {
  timer: -1,
  setInterval: function (callback: () => any, interval: number) {
    let startTime = new Date().valueOf();
    let endTime = new Date().valueOf();
    const self = this;
    const loop = function () {
      self.timer = requestAnimationFrame(loop);
      endTime = new Date().valueOf();
      if (endTime - startTime >= interval) {
        endTime = startTime = new Date().valueOf();
        callback && callback();
      }
    };
    this.timer = requestAnimationFrame(loop);
    return this.timer;
  },
  clearInterval: function () {
    cancelAnimationFrame(this.timer);
  },
};
