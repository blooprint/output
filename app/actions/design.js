//	triggered by keydown
export function keyPressed(key,stamp){
	return {
		type: 'KEY_PRESSED',
		key,
		stamp
	}
}
export function clickCorner(xPos,yPos) {
	return {
		type: 'CLICK_CORNER',
		xPos,
		yPos
	}
}
export function leaveCalibration() {
    return {
        type: 'LEAVE_CALIBRATION'
    }
}
