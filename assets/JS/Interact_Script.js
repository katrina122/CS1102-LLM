function updateSliderValue(slider) {
    var valueDisplay = slider.id === 'layersSlider' ? document.getElementById('layersValue') : document.getElementById('dataSizeValue');
    valueDisplay.innerText = slider.value;
}


function getLevel(value) {
    if (value <= 33) {
        return 'low';
    } else if (value <= 66) {
        return 'medium';
    } else {
        return 'high';
    }
}


function generateText() {
    var layersLevel = getLevel(document.getElementById('layersSlider').value);
    var dataSizeLevel = getLevel(document.getElementById('dataSizeSlider').value);

    var presetOutputs = {
        'low': {
            'low': "Computer science is study of computers.",
            'medium': "Computer science is the study of computers and software.",
            'high': "Computer science is the field that studies computers, software, and how they work."
        },
        'medium': {
            'low': "Computer science is a field of study that focuses on the operation of computers and their software",
            'medium': "Computer science is a scientific discipline that involves the study of computers and programming languages, focusing on algorithms, data structures, and the principles of software applications.",
            'high': "Computer science is the systematic study of algorithmic processes that describe and transform information: the theory, analysis, design, efficiency, implementation, and application of these processes."
        },
        'high': {
            'low': "Computer science is the study of how computers work, mainly focusing on software, programming languages, and data processing.",
            'medium': "Computer science is a comprehensive field that encompasses the study of computation, computer technology, and the impact of systems on society, focusing extensively on software systems and algorithms.",
            'high': "Computer science is an extensive discipline that studies the theoretical foundations of information and computation, applying these elements through systematic study to the implementation of computer systems. The field encompasses a variety of topics from software applications to algorithmic challenges, operating systems, and explores the practical, scientific, and theoretical approach to computation and its applications."
        }
    };

    var outputTextArea = document.getElementById('outputText');
    outputTextArea.innerText = presetOutputs[layersLevel][dataSizeLevel];
}

