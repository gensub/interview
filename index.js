function openNav() {
  document.getElementById("mySidebar").style.width = "300px";
  // document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  // document.getElementById("main").style.marginLeft= "0";
}

function ChangeMenuData() {
  document.getElementById("data-content").innerHTML=insideMenu;
  document.getElementById("navigation-menu").innerHTML="Shopping";
  // document.getElementById("main").style.marginLeft= "0";
}

function ChangeFormData() {
  document.getElementById("data-content").innerHTML=menuData;
  document.getElementById("navigation-menu").innerHTML="Menu";
  // document.getElementById("main").style.marginLeft= "0";
}

const insideMenu = '<div class="container row border-grey">'+
  '<div class="col-lg-12 row form-group padding-form">' +
  '<input class="border-radius-subject grey-background height-3em" type="text" placeholder="Subject:">' +
  '</div>' +
  '<div class="col-lg-12 row form-group padding-form">' +
  '<textarea placeholder="Description.." class="border-radius-subject grey-background" rows="8" cols="50"></textarea>' +
  '</div>' +
  '<div class="col-lg-12 row form-group padding-form">' +
  '<button class="border-radius-subject blue-background padding-0-5">Submit</button>' +
  '</div>' +
  '</div>'

const menuData = '<div class="container row border-grey white-background bottom-border">'+
'          <div class="row border-bottom">'+
'            <div onClick="ChangeMenuData();" class="col-lg-12 padding-5px ">'+
'              <div class="col-lg-offset-2 col-lg-6 bold">Shopping</div>'+
'              <div class="col-lg-offset-2 col-lg-2 float-right color-lightgrey"><i class="fa fa-chevron-right"></i></div>'+
'            </div>'+
'          </div>'+
'          <div class="row border-bottom">'+
'            <div class="col-lg-12 padding-5px ">'+
'              <div class="col-lg-offset-2 col-lg-6 bold">Options</div>'+
'              <div class="col-lg-offset-2 col-lg-2 float-right color-lightgrey"><i class="fa fa-chevron-right"></i></div>'+
'            </div>'+
'          </div>'+
'          <div class="row border-bottom bold">'+
'            <div class="col-lg-12 padding-5px ">'+
'              <div class="col-lg-offset-2 col-lg-6 bold">Bug Report</div>'+
'              <div class="col-lg-offset-2 col-lg-2 float-right color-lightgrey"><i class="fa fa-chevron-right"></i></div>'+
'            </div>'+
'          </div>'+
'          <div class="row border-bottom">'+
'            <div class="col-lg-12 padding-5px ">'+
'              <div class="col-lg-offset-2 col-lg-6 bold">Playing</div>'+
'              <div class="col-lg-offset-2 col-lg-2 float-right color-lightgrey"><i class="fa fa-chevron-right"></i></div>'+
'            </div>'+
'          </div>'+
'          <div class="row border-bottom">'+
'            <div class="col-lg-12 padding-5px ">'+
'              <div class="col-lg-offset-2 col-lg-6 bold">Games</div>'+
'              <div class="col-lg-offset-2 col-lg-2 float-right color-lightgrey"><i class="fa fa-chevron-right"></i></div>'+
'            </div>'+
'          </div>'+
'          <div class="row border-bottom">'+
'            <div class="col-lg-12 padding-5px ">'+
'              <div class="col-lg-offset-2 col-lg-6 bold">Logout</div>'+
'              <div class="col-lg-offset-2 col-lg-2 float-right color-lightgrey"><i class="fa fa-chevron-right"></i></div>'+
'            </div>'+
'          </div>'+
'          <div class="row border-bottom">'+
'            <div class="col-lg-12 padding-5px ">'+
'              <div class="col-lg-offset-2 col-lg-6 bold">iTrainer</div>'+
'              <div class="col-lg-offset-2 col-lg-2 float-right color-lightgrey"><i class="fa fa-chevron-right"></i></div>'+
'            </div>'+
'          </div>'+
'        </div>';
