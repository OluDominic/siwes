import React from 'react';
import Select from 'react-select';

const options = [
    { value: 'accounting', label: 'Accounting' },
    { value: 'architecture', label: 'Architecture' },
    { value: 'banking and finance', label: 'Banking and Finance' },
    { value: 'biochemistry', label: 'Biochemistry' },
    { value: 'biology', label: 'Biology' },
    { value: 'building technology', label: 'Building Technology' },
    { value: 'business adminstration', label: 'Business Administration' },
    { value: 'chemical engineering', label: 'Computer Engineering' },
    { value: 'civil engineering', label: 'Civil Engineering' },
    { value: 'computer engineering', label: 'Computer Engineering' },
    { value: 'computer science', label: 'Computer Science' },
    { value: 'demography and social statistics', label: 'Demography and Social Statistics' },
    { value: 'economics', label: 'Economics' },
    { value: 'electrical/electronics engineering', label: 'Electrical/Electronics Engineering' },
    { value: 'english language', label: 'English Language' },
    { value: 'entrepreneurship', label: 'Entrepreneurship' },
    { value: 'estate management', label: 'Estate Management' },
    { value: 'french', label: 'French' },
    { value: 'industrial relations', label: 'Industrial Relations' },
    { value: 'industrial chemistry', label: 'Industrial Chemistry' },
    { value: 'industrial mathematics', label: 'Industrial Mathematics' },
    { value: 'industial physics with applied geographics', label: 'Industrial Physics with Applied Geographics' },
    { value: 'industrial physics with electronincs and it applications', label: 'Industrial Physics with Applied Geographics' },
    { value: 'information and communication engineering', label: 'Information and Communication Engineering' },
    { value: 'international relations', label: 'International Relations' },
    { value: 'management information systems', label: 'Management Information Systems' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'mass communication', label: 'Mass Communication' },
    { value: 'mechanical engineering', label: 'Mechanical Engineering' },
    { value: 'microbiology', label: 'Microbiology' },
    { value: 'petroleum engineering', label: 'Petroleum Engineering' },
    { value: 'policy and strategic studies', label: 'Politics and Strategic Studies' },
    { value: 'political science', label: 'Political Science' },
    { value: 'psychology', label: 'Psychology' },
    { value: 'sociology', label: 'Sociology' }
]

const customStyle = {
    option: (provided, state)=> ({
        ...provided,
        padding: 20,
        opacity: 0.8,
        cursor: 'pointer',
        fontWeight: 'bold',
        color: state.isSelected ? '#000001' : 'black',
        backgroundColor: state.isSelected ? 'white' : 'white',
        '&:hover': {
            backgroundColor: 'grey',
            color: 'black',
            fontWeight: 'bold'
        }
    }),

    control: (provided) => ({
        ...provided,
        border: '2px solid black',
        boxShadow: 'none',
        '&:hover': {
            border: '2px solid black'
        },
        width: '300px',
        marginTop: '5%',
        placeholder: 'Level',
    }),

    singleValue: (provided, state) => ({
        ...provided,
        color: state.data.color,
    })
}

class Courses extends React.Component {

    render (){
        return (
            <Select
            options = {options}
            isSearchable
            styles = {customStyle}
            />
        );
    }
}

export default Courses;