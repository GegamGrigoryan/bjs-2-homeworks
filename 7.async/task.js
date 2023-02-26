class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }
    addClock(time, calback) {
        if (time == undefined || calback == undefined) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        if (this.alarmCollection.find(el => el.time == time)) {
            console.warn('Уже присутствует звонок на это же время')
        }
        this.alarmCollection.push({ callback: calback, time: time, canCall: true })
    }
    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(el => el.time != time);
    }
    getCurrentFormattedTime() {
        return new Date(Date.now()).toTimeString().slice(0, 5);
    }
    start() {
        if (this.intervalId != null) {
            return
        }
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(el => {
                if (el.time == this.getCurrentFormattedTime() && el.canCall == true) {
                    el.canCall = false;
                    el.callback()
                }
            })
        }, 1000)
    }
    stop() {
        clearInterval(this.intervalId)
        this.intervalId = null;
    }
    resetAllCalls() {
        this.alarmCollection.forEach(el => el.canCall = true);
    }
    clearAlarms() {
        this.stop()
        this.alarmCollection = [];
    }
}

