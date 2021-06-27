let mySchool = {name: "UST", location: "Manila", population:"40000"};
function offer(courses) {
    console.log("${this.name} offers ${courses}");
    return;
}

let newFunction= offer.bind(mySchool);
newFunction(["architecture", "nursing", "information systems"]);
