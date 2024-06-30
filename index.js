class Province {
    constructor(data) {
        this.id = data.id
        this.name_en = data.name_en
        this.name_th = data.name_th
        this.hs = data.hs
        this.iso = data.iso
        this.fips = data.fips
        this.create_at = data.create_at
        this.update_at = data.update_at
        this.district = []
    }

    addDistrict(district) {
        this.district.push(district)
    }
}

class District {
    constructor(data) {
        this.id = data.id
        this.province_id = data.province_id
        this.name_th = data.name_th
        this.name_en = data.name_en
        this.create_at = data.create_at
        this.update_at = data.update_at
        this.subDistrict = []
    }
    addSubDistrict(subDistrict) {
        this.subDistrict.push(subDistrict)
    }
}

class SubDistrict {
    constructor(data) {
        this.id = data.id
        this.district_id = data.distric_id
        this.name_th = data.name_th
        this.name_en = data.name_en
        this.zip_code = data.zip_code
        this.create_at = data.create_at
        this.update_at = data.update_at
    }
}

const fs = require('fs');

const provinceJson = fs.readFileSync('asset/province.json', 'utf-8');
const districJson = fs.readFileSync('asset/district.json', 'utf-8');
const subDistricJson = fs.readFileSync('asset/sub_district.json', 'utf-8');

const provinceData = JSON.parse(provinceJson);
const districData = JSON.parse(districJson);
const subDistriceData = JSON.parse(subDistricJson);


const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/api/v1/thailand/provinces', (_, res) => {
    res.send(provinceData)
})

app.get('/api/v1/thailand/districts', (_, res) => {
    res.send(districData)
})

app.get('/api/v1/thailand/subDistricts', (_, res) => {
    res.send(subDistriceData)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})