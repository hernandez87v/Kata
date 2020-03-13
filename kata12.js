const organizeInstructors = function(instructors) {
  let courses = {};

  for (let i = 0; i < instructors.length; i++) {
    //console.log(instructors);
    if (courses[instructors[i].course] === undefined) {
      courses[instructors[i].course] = [instructors[i].name];
    } else {
      courses[instructors[i].course].push(instructors[i].name);
    }
  }

  return courses;
};

console.log(
  organizeInstructors([
    { name: 'Samuel', course: 'iOS' },
    { name: 'Victoria', course: 'Web' },
    { name: 'Karim', course: 'Web' },
    { name: 'Donald', course: 'Web' }
  ])
);
console.log(
  organizeInstructors([
    { name: 'Brendan', course: 'Blockchain' },
    { name: 'David', course: 'Web' },
    { name: 'Martha', course: 'iOS' },
    { name: 'Carlos', course: 'Web' }
  ])
);
