const students = [
    {
        'id': 1,
        'name': 'Hulk',
        'games': ['football', 'cricket', 'tennies'],
        'selected': false,

    },
    {
        'id': 2,
        'name': 'Thor',
        'games': ['football', 'cricket'],
        'selected': false,

    },
    {
        'id': 3,
        'name': 'Ironman',
        'games': ['cricket', 'tennies'],
        'selected': false,

    },
    {
        'id': 4,
        'name': 'Superman',
        'games': ['cricket'],
        'selected': false,

    },
    {
        'id': 5,
        'name': 'Spiderman',
        'games': ['football','tennies'],
        'selected': false,

    }
];

export default {
    getStudentData(){
        return students;
    }
}