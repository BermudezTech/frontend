let region = document.querySelector("#region"),
    departamento = document.querySelector("#departamento"),
    municipio = document.querySelector("#municipio");
let regions = [];
let departamentos = [];
let municipios = [];

const fetchGETQuery = async(url) => {
    try{
        let res = await fetch(url),
            json = await res.json();

        if(!res.ok) throw {status: res.status, statusText: res.statusText};
        return json;
    }catch(err){
        console.log(err);
    }
}

let getRegions = fetchGETQuery("https://www.datos.gov.co/resource/xdk5-pm3f.json").then(res => {
    res.forEach((e) => {
        regions = [...regions, e.region];
    });
}).then(e => {
    let filteredRegions = regions.filter((ele, pos) => regions.indexOf(ele) == pos);
    regions = filteredRegions;
}).then(() => {
    return regions;
});


window.addEventListener("load", () => {
    getRegions.then(e => {
        let fragment = document.createDocumentFragment();
        e.forEach((el) => {
            let option = document.createElement("option");
            option.textContent = el;
            fragment.appendChild(option);
        });
        region.appendChild(fragment);
    });
});

region.addEventListener("change", () => {
    departamentos = [];
    municipios = [];
    municipio.innerHTML = "<option value='0'>Seleccione el municipio</option>";
    let selectedRegion = region.options[region.options.selectedIndex].textContent;
    let url = `https://www.datos.gov.co/resource/xdk5-pm3f.json?region=${selectedRegion}`;
    let getDepartamentos = fetchGETQuery(url).then(res => {
        res.forEach((e) => {
            departamentos = [...departamentos, e.departamento];
        });
    }).then(() => {
        let filteredDepartamentos = departamentos.filter((ele, pos) => departamentos.indexOf(ele) == pos);
        departamentos = filteredDepartamentos;
    }).then(() => {
        return departamentos;
    });
    getDepartamentos.then(e => {
        departamento.innerHTML = "<option value='0'>Seleccione el departamento</option>";
        let fragment = document.createDocumentFragment();
        e.forEach(el => {
            let option = document.createElement("option");
            option.textContent = el;
            fragment.appendChild(option);
        });
        departamento.appendChild(fragment);
    });
});

departamento.addEventListener("change", () => {
    municipios = [];
    let selectedDepartamento = departamento.options[departamento.options.selectedIndex].textContent;
    let url = `https://www.datos.gov.co/resource/xdk5-pm3f.json?departamento=${selectedDepartamento}`;
    let getMunicipios = fetchGETQuery(url).then(res => {
        res.forEach((e) => {
            municipios = [...municipios, e.municipio];
        });
    }).then(() => {
        let filteredMunicipios = municipios.filter((ele, pos) => municipios.indexOf(ele) == pos);
        municipios = filteredMunicipios;
    }).then(() => {
        return municipios;
    });
    getMunicipios.then(e => {
        municipio.innerHTML = "<option value='0'>Seleccione el municipio</option>";
        let fragment = document.createDocumentFragment();
        e.forEach(el => {
            let option = document.createElement("option");
            option.textContent = el;
            fragment.appendChild(option);
        });
        municipio.appendChild(fragment);
    })
});