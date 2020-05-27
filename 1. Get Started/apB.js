const dayStart = "07:30";
const dayEnd = "17:45";

export const scheduleMeeting = (startTime, duration) => {
    let startMeeting = extractTime(startTime)
    let endMeeting = getEndMeetingTime(startMeeting, duration);
    //Author suggest to test with String comparaison
    return isAfter(startMeeting, extractTime(dayStart)) && isBefore(endMeeting, extractTime(dayEnd))
}


const extractTime = (hhMMString) => {
    return hhMMString.split(':').map(val => parseInt(val, 10))
}
const isAfter = (hhMM1, hhMM2) => {
    return hhMM1[0] > hhMM2[0] || (hhMM1[0] == hhMM2[0] && hhMM1[1] >= hhMM2[1])
}
const isBefore = (hhMM1, hhMM2) => {
    return hhMM1[0] < hhMM2[0] || (hhMM1[0] == hhMM2[0] && hhMM1[1] <= hhMM2[1])
}

const getEndMeetingTime = (start, duration) => {
    let end = [...start]
    end[1] += duration;
    while (end[1] >= 60) {
        end[0]++;
        end[1] -= 60;
    }
    return end;
}

//--------------------------------------------------------

export function range(start,end) {
    const getRange = (start, end) => {
        if (end-start+1 <= 0) {
            return [];
        }
        return new Array(end-start+1).fill(start).map((val, index) => val + index)
    }
    
    if (end == undefined) {
        return function withEnd(end) {
            return getRange(start, end)
        }
    }
    return getRange(start, end);
}

//--------------------------------------------------------
