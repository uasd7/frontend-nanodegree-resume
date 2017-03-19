/*
 This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    name: 'Stefan Schreiber',
    role: 'Front-End Web Developer',
    contacts: {
        email: 'stefan.schreiber.os@googlemail.com',
        mobile: '+49 172 xxxxxxx',
        github: 'uasd7',
        location: 'Osnabrück'
    },
    biopic: 'images/sts.jpg',
    skills: ['JS', 'HTML5', 'CSS3', 'PHP', 'MySQL', 'Symfony', 'jQuery', 'Google AMP', 'Facebook InstantArticles', 'Front-End-Performance'],
    welcomeMessage: 'Hallo, mein Name ist Stefan und ich entwickle seit 2013 für die Kunden der Firma basecom GmbH & Co. KG komplexe Front-End Lösungen.',
    display: function () {
        var header = $('#header');
        header
            .prepend(HTMLheaderRole.replace('%data%', bio.role))
            .prepend(HTMLheaderName.replace('%data%', bio.name))
            .prepend(HTMLbioPic.replace('%data%', bio.biopic))
            .append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));
        $('#topContacts, #footerContacts')
            .prepend(HTMLemail.replace('%data%', bio.contacts.email))
            .prepend(HTMLmobile.replace('%data%', bio.contacts.mobile))
            .prepend(HTMLgithub.replace('%data%', bio.contacts.github))
            .prepend(HTMLlocation.replace('%data%', bio.contacts.location));

        if (bio.skills.length > 0) {
            header.append(HTMLskillsStart);
            for (var i = 0; i < bio.skills.length; i++) {
                $('#skills').append(HTMLskills.replace('%data%', bio.skills[i]));
            }
        }

    }
};

var work = {
    jobs: [
        {
            employer: 'basecom GmbH & Co. KG',
            title: 'Front-End Web Developer',
            location: 'Osnabrück',
            dates: 'ab Januar 2015',
            description: 'Einziger Front-End Entwickler für die Webseite der Neuen Osnabrücker Zeitung und zugehöriger Zeitungstitel'
        },
        {
            employer: 'basecom GmbH & Co. KG',
            title: 'Ausbildung zum Fachinformatiker - Anwendungsentwicklung',
            location: 'Osnabrück',
            dates: 'August 2012 bis Januar 2015',
            description: 'Verkürzung der Ausbildung um 6 Monate. Eingesetzt als Entwickler für Magento Online-Shops, Symfony Individualentwicklungen und die  Webseite der Neuen Osnabrücker Zeitung und zugehöriger Zeitungstitel'
        }
    ],
    display: function () {
        for (var i = 0; i < work.jobs.length; i++) {
            $('#workExperience').append(HTMLworkStart);
            var entry = $('.work-entry').last();
            var entryHtmlString = '';
            entryHtmlString += HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
            entryHtmlString += HTMLworkTitle.replace('%data%', work.jobs[i].title);
            entryHtmlString += HTMLworkDates.replace('%data%', work.jobs[i].dates);
            entryHtmlString += HTMLworkLocation.replace('%data%', work.jobs[i].location);
            entryHtmlString += HTMLworkDescription.replace('%data%', work.jobs[i].description);
            entry.append(entryHtmlString);
        }
    }
};

var projects = {
    projects: [
        {
            title: 'Webseite der Neue Osnabrücker Zeitung und zugehöriger Zeitungstitel',
            dates: 'ab Januar 2013',
            description: 'Symfony Individualentwicklung - 9 Zeitungstitel in einem Portal mit Cockpitbereich für Redakteure',
            images: ['images/noz.jpg']
        },
        {
            title: 'Original Bootcamp',
            dates: 'April 2015 - Juni 2015',
            description: 'Magento Onlineshop - Front-End Grundlagen',
            images: ['images/obc.jpg']
        },
        {
            title: 'Optik Bruder',
            dates: 'September 2013 - April 2014',
            description: 'Magento Onlineshops - 3 Shops mit jeweils 3 Storeviews',
            images: ['images/be2look.jpg']
        }
    ],
    display: function () {
        for (var i = 0; i < projects.projects.length; i++) {
            $('#projects').append(HTMLprojectStart);
            var entry = $('.project-entry').last();
            entry.append(HTMLprojectTitle.replace('%data%', projects.projects[i].title));
            entry.append(HTMLprojectDates.replace('%data%', projects.projects[i].dates));
            entry.append(HTMLprojectDescription.replace('%data%', projects.projects[i].description));
            projects.projects[i].images.forEach(function (elem) {
                entry.append(HTMLprojectImage.replace('%data%', elem));
            });
        }
    }
};

var education = {
    schools: [
        {
            name: 'Universität Osnabrück',
            degree: '2-Fächer-Bachelor - Lehramt (Mathematik/Informatik)',
            location: 'Osnabrück',
            dates: '2008 - 2012',
            url: 'https://www.uni-osnabrueck.de',
            majors: ['none']
        },
        {
            name: 'Clemens August Gymnasium',
            degree: 'Gymnasium',
            location: 'Cloppenburg',
            dates: '2002 - 2007',
            url: 'http://www.c-a-g.de',
            majors: ['Abitur']
        },
        {
            name: 'Léon-Foucault-Gymnasium',
            degree: 'Gymnasium',
            location: 'Hoyerswerda',
            dates: '1998 - 2002',
            url: 'http://www.foucaultgymnasium.de/',
            majors: ['none']
        },
        {
            name: '9. Grundschule',
            degree: 'Grundschule',
            location: 'Hoyerswerda',
            dates: '1994 - 1998',
            majors: ['none']
        }
    ],
    onlineCourses: [
        {
            title: 'Nanodegree - Front-Web Developer',
            school: 'Udacity',
            dates: '2017',
            url: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
        }
    ],
    display: function () {
        var entryHtmlString;
        var entry;
        var educationWrapper = $('#education');
        for (var i = 0; i < education.schools.length; i++) {
            educationWrapper.append(HTMLschoolStart);
            entry = $('.education-entry').last();
            entryHtmlString = '';
            entryHtmlString += HTMLschoolName.replace('%data%', education.schools[i].name);
            entryHtmlString += HTMLschoolDegree.replace('%data%', education.schools[i].degree);
            entryHtmlString += HTMLschoolDates.replace('%data%', education.schools[i].dates);
            entryHtmlString += HTMLschoolLocation.replace('%data%', education.schools[i].location);
            if(education.schools[i].majors.length > 0) {
                entryHtmlString += HTMLschoolMajor.replace('%data%', education.schools[i].majors.join(', '));
            }
            entry.append(entryHtmlString);
        }

        educationWrapper.append(HTMLonlineClasses);
        for (var j = 0; j < education.onlineCourses.length; j++) {
            educationWrapper.append(HTMLschoolStart);
            entry = $('.education-entry').last();
            entryHtmlString = '';
            entryHtmlString += HTMLonlineTitle.replace('%data%', education.onlineCourses[j].title);
            entryHtmlString += HTMLonlineSchool.replace('%data%', education.onlineCourses[j].school);
            entryHtmlString += HTMLonlineDates.replace('%data%', education.onlineCourses[j].dates);
            entryHtmlString += HTMLonlineURL.replace('%data%', education.onlineCourses[j].url);
            entry.append(entryHtmlString);
        }
    }
};


bio.display();
projects.display();
work.display();
education.display();
$('#mapDiv').append(googleMap);
