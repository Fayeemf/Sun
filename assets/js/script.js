var subtitles = ["Majidul Mooktadeer", "Hamzah Bemat ", "Zaid Shaikh", "Ashraful Hassan", "Subhan Tariq", "Physics Of Sound"];

var projects = [
    {
        title: "Google Presentation.",
        desc: "Physics of Sound, learn about the aerodynamics of sound.",
        img: "IdekWhat.png",
        link: "https://docs.google.com/presentation/d/15Mw2Dyp_wDAWWUfMPBB6zFGvAPuWZJdD3w6YZjgw_cg/edit?usp=sharing"
    },
    {
        title: "Majidul Mooktadeer",
        desc: "Site Maker + Info gatherer.",
        img: "college-organizer.png",
        link: "https://www.facebook.com/profile.php?id=100008014488117&ref=bookmarks"
    },
    {
        title: "Hamzah Bemat",
        desc: "Info Gatherer.",
        img: "centre-news.jpg",
        link: "https://www.facebook.com/Wrd2hanS?ref=br_rs"
    },
    {
        title: "Zaid Shaikh",
        desc: "Info Gatherer.",
        img: "all-star-wars.jpg",
        link: "https://www.facebook.com/zaid.shaikh.77715869?fb_dtsg_ag=AdwLbVDKOlsShO8YkpVkBZdYgfMajTIpHLkikOWZRogzDA%3AAdyI31mwsUwbgL735AL7RZvo8qZdTwx5FwlZlz47sneI6w"
    },
    {
        title: "Ashraful Hassan",
        desc: "Info Gatherer.",
        img: "Ashraful.jpg",
        link: "https://www.facebook.com/ashraful.hassan.184"
    },
    {
        title: "Ashraful Hassan",
        desc: "Info Gatherer.",
        img: "Ashraful.jpg",
        link: "https://www.facebook.com/ashraful.hassan.184"
    }
]

var skills = [
    {
        name: "html",
        desc: "Sound Waves: a wave of compression and rarefaction, by which sound is propagated in an elastic medium such as air."
    },
    {
        name: "Gang",
        desc: "Amplitude: the maximum extent of a vibration or oscillation, measured from the position of equilibrium."
    },
    {
        name: "Gang",
        desc: "Frequency: the rate at which a vibration occurs that constitutes a wave, either in a material (as in sound waves), or in an electromagnetic field (as in radio waves and light), usually measured per second."
    }
]

var count = 0;
var tabOutLeft = false;
var tabOutRight = false;

particlesJS.load('particles', 'assets/lib/particles.json', function() {
});

$(document).ready(function () {
    $("#title").fadeIn(1000);
    $("#navbar").fadeIn(3000);
    //$("#bg-pic").attr("src","assets/img/backgrounds/"+(Math.floor(Math.random()*18)+1)+".jpg");
    changeSubtitle();
    for (var i = 0; i < projects.length; i++) {
        $("#sidebar-right").append("<div class='project'><a href=" + projects[i].link + " target='_newtab'><img class='projectImg' src='assets/img/projects/" + projects[i].img + "'></a><h4>" + projects[i].title + "</h4><h5>" + projects[i].desc + "</h5></div>");
    }
    for (var i = 0; i < skills.length; i++) {
        $(".panel-group").append("<div class='panel'><h4><a data-toggle='collapse' data-parent='#accordion' href='#panel-" + skills[i].name + "'><img class='projectImg' src='assets/img/skills/" + skills[i].name + ".png'></a></h4><div id='panel-" + skills[i].name + "' class='panel-collapse collapse'><div class='panel-body'>" + skills[i].desc + "</div></div></div>");
    }
    if (window.innerWidth < 700) {
        $("#arrow-right").html("<i class='fa fa-chevron-up' aria-hidden='true'></i>");
        $("#arrow-left").html("<i class='fa fa-chevron-up' aria-hidden='true'></i>");
    } else {
        $("#arrow-right").html("<i class='fa fa-chevron-left' aria-hidden='true'></i>");
        $("#arrow-left").html("<i class='fa fa-chevron-right' aria-hidden='true'></i>");
    }
});

$("#sidebarTab-right").hover(function () {
    $("#sidebar-right").css("background-color", "#1a1a1a");
}, function () {
    $("#sidebar-right").css("background-color", "#212121");
});

$("#sidebarTab-left").hover(function () {
    $("#sidebar-left").css("background-color", "#1a1a1a");
}, function () {
    $("#sidebar-left").css("background-color", "#212121");
});

$("#sidebarTab-right").click(function () {
    if (window.innerWidth > 700) {
        if (!tabOutRight) {
            $("#title").css("right", "30%");
            $("#sidebar-right").css("right", 0);
            $("#sidebarTab-right").css("right", (.3 * window.innerWidth) - 10);
            $("#arrow-right").html("<i class='fa fa-chevron-right' aria-hidden='true'></i>");
            tabOutRight = true;
        } else if (tabOutRight) {
            $("#title").css("right", "0");
            $("#sidebar-right").css("right", "-30%");
            $("#sidebarTab-right").css("right", "-10px");
            $("#arrow-right").html("<i class='fa fa-chevron-left' aria-hidden='true'></i>");
            tabOutRight = false;
        }
    } else if (window.innerWidth <= 700) {
        if (!tabOutRight) {
            $("#title").css("transform", "translateY(-95%)");
            $("#sidebar-right").css("bottom", 0);
            $("#sidebarTab-right").css("bottom", (.5 * window.innerHeight) - 10);
            $("#arrow-right").html("<i class='fa fa-chevron-down' aria-hidden='true'></i>");
            if (window.innerWidth < 360) {
                $("#navbar").fadeOut(500);
            }
            tabOutRight = true;
        } else if (tabOutRight) {
            $("#title").css("transform", "translateY(-70%)");
            $("#sidebar-right").css("bottom", "-50%");
            $("#sidebarTab-right").css("bottom", "-10px");
            $("#arrow-right").html("<i class='fa fa-chevron-up' aria-hidden='true'></i>");
            if (window.innerWidth < 360) {
                $("#navbar").fadeIn(500);
            }
            tabOutRight = false;
        }
    }
});

$("#sidebarTab-left").click(function () {
    if (window.innerWidth > 700) {
        if (!tabOutLeft) {
            $("#title").css("left", "30%");
            $("#sidebar-left").css("left", 0);
            $("#sidebarTab-left").css("left", (.3 * window.innerWidth) - 10);
            $("#arrow-left").html("<i class='fa fa-chevron-left' aria-hidden='true'></i>");
            tabOutLeft = true;
        } else if (tabOutLeft) {
            $("#title").css("left", "0");
            $("#sidebar-left").css("left", "-30%");
            $("#sidebarTab-left").css("left", "-10px");
            $("#arrow-left").html("<i class='fa fa-chevron-right' aria-hidden='true'></i>");
            tabOutLeft = false;
        }
    } else if (window.innerWidth <= 700) {
        if (!tabOutLeft) {
            $("#title").css("transform", "translateY(-95%)");
            $("#sidebar-left").css("bottom", 0);
            $("#sidebarTab-left").css("bottom", (.5 * window.innerHeight) - 10);
            $("#arrow-left").html("<i class='fa fa-chevron-down' aria-hidden='true'></i>");
            if (window.innerWidth < 360) {
                $("#navbar").fadeOut(500);
            }
            tabOutLeft = true;
        } else if (tabOutLeft) {
            $("#title").css("transform", "translateY(-70%)");
            $("#sidebar-left").css("bottom", "-50%");
            $("#sidebarTab-left").css("bottom", "-10px");
            $("#arrow-left").html("<i class='fa fa-chevron-up' aria-hidden='true'></i>");
            if (window.innerWidth < 360) {
                $("#navbar").fadeIn(500);
            }
            tabOutLeft = false;
        }
    }
});

function changeSubtitle() {
    setInterval(function () {
        if (count < subtitles.length - 1) {
            $("#subtitle").html(subtitles[count]);
            count++;
        } else {
            $("#subtitle").html(subtitles[subtitles.length - 1]);
            count = 0;
        }
    }, 1000);
}
