
$(window).load(function(){
  $.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js',
  function(){
    alert(remote_ip_info.country);
    alert(remote_ip_info.province);
    alert(remote_ip_info.city);
  }
)
})

// $("#btn").click(function(){
//   $("#box").text("");
//   $.getJSON(
//     "http://apis.juhe.cn/ip/ip2addr?callback=?",
//     {
//       "ip":$('#ip').val(),"key":"2fd40024f12985c2ca2884afb61c6b5c","dtype":"json"
//     },
//     function(data){
//       console.log(data);
//       var html="";
//       var area=data.result.area;
//       var location=data.result.location;
//       html='<li>${area}</li><li>${location}</li>';
//       $("#box").append(html);
//     }
//   )
// })
// $(window).load(function(){
//   $.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js',
// function(){
//   alert(remote_ip_info.country);
//   alert(remote_ip_info.province);
//   alert(remote_ip_info.city);
// })
// })