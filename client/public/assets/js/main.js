var hostPath = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
//var baseApiUrl = hostPath;
var baseApiUrl = "https://localhost:44342";// hostPath;

var baseAppUrl = hostPath + '/admin/app';

function ajaxCall(url, method, data, onSuccessMethod, onFailMethod, ctype) {
  var conType
  var credential
  var crossDom
  var procData = null

  if (ctype == 'media') {
    conType = false
    credential = true
    crossDom = true
    procData = false
  } else if (ctype == 'x-www-form') {
    conType = 'application/x-www-form-urlencoded'
    credential = true
    crossDom = true
  } else if (ctype == 'google-api') {
    conType = false
    credential = false
    crossDom = true
  } else if (ctype == 'sign-up') {
    conType = 'application/json; charset=UTF-8'
    credential = false
    crossDom = true
    data = data ? JSON.stringify(data) : null
  } else {
    conType = 'application/json; charset=UTF-8'
    credential = true
    crossDom = true
    data = data ? JSON.stringify(data) : null
  }

  $.ajax({
    url: url,
    type: method,
    data: data,
    processData: procData,
    contentType: conType,
    crossDomain: crossDom,
    xhrFields: {
      withCredentials: credential
    },
    success: function (data) {
      onSuccessMethod(data)
    },
    error: function (err) {
      if (err.status == 503) {
        //location = baseApiUrl + '/maintenance'
      }
      onFailMethod(err)
    }
  })
}



$(document).ready(function () {
  $(".search").keyup(function () {
    var searchTerm = $(".search").val();
    var listItem = $('.results tbody').children('tr');
    var searchSplit = searchTerm.replace(/ /g, "'):containsi('")

    $.extend($.expr[':'], {
      'containsi': function (elem, i, match, array) {
        return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
      }
    });

    $(".results tbody tr").not(":containsi('" + searchSplit + "')").each(function (e) {
      $(this).attr('visible', 'false');
    });

    $(".results tbody tr:containsi('" + searchSplit + "')").each(function (e) {
      $(this).attr('visible', 'true');
    });

    var jobCount = $('.results tbody tr[visible="true"]').length;
    $('.counter').text(jobCount + ' item');

  });
});