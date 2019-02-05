function date(data, dateGiven){
    let dateList = [];
    const formatChangedDateGiven = new Date(dateGiven);
    for (let obj of data) {
        const formatChangedDate = new Date(obj.date);
        if (formatChangedDate >= formatChangedDateGiven) {
            dateList.push(obj);
        }
    }
    return dateList;
}

module.exports = {
    date
};
