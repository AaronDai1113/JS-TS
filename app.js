window.addEventListener('load', ()=>{
    let long;
    let lat;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long= position.coords.longitude;
            lat= position.corrds.latitude;
            
            //const proxy = 'https://cos-anywhere.herokuapp.com/'
            const api=`https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`;

            fetch(api)
            .then(response=>{
                return response.json();
            })
            .then(data=>{
                console.log(data);
            })
        });

        
    }
});