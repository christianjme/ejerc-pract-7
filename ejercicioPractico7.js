function responsiveMedia(el, mq, mobileContent, desktopContent){

  let breakPoint = matchMedia(mq)

  const  responsive = e =>{
    if (e.matches) {
      document.getElementById(el).innerHTML = desktopContent
    }else{
      document.getElementById(el).innerHTML = mobileContent
    }
    console.log(e.matches)
  }

  responsive(breakPoint)
  breakPoint.addEventListener('change', responsive)
}

addEventListener('DOMContentLoaded', ()=>{
  responsiveMedia('youtube', '(min-width: 900px)', '<a href="https://www.youtube.com/watch?v=kMo0N0LY0IU" target="_blank">Ver video</a>', '<iframe width="560" height="315" src="https://www.youtube.com/embed/kMo0N0LY0IU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
  responsiveMedia('map', '(min-width: 900px)', '<a href="https://www.google.com.pe/maps/place/Parque+San+Martin/@-6.7004908,-79.9137297,17z/data=!3m1!4b1!4m5!3m4!1s0x904ced88ccb90e85:0x4e2e9255ea08bbdd!8m2!3d-6.7004908!4d-79.9137297?hl=es" target="_blank">Ver mapa</a>', '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.5664651444617!2d-79.91372969999999!3d-6.7004908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904ced88ccb90e85%3A0x4e2e9255ea08bbdd!2sParque%20San%20Martin!5e0!3m2!1ses!2spe!4v1665501381292!5m2!1ses!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>')
})


