function autoChamcong() {
    //start
    setInterval(function () {
        if (jQuery('.btn-success').text() == 'Start') {
            jQuery('.btn-success')[0].click();
            console.log('start 1')
        } else {
            console.log('start 2');
        }
    }, 60000);

    //stop
    setInterval(function () {
        let totalTime = jQuery('#stopwatch').text();
        let totalHours =  totalTime.substring(0,2);
        if (parseInt(totalHours) >= 4) {
            if (jQuery('.btn-log').text() == 'Stop') {
                jQuery('.btn-log')[0].click();
                console.log('stop 1')
            } else {
                console.log('stop 2');
            }
        } else {
            console.log('Chưa về được đâu!')
        }
        
    }, 60000);
}
autoChamcong();
