import React, { useState, useEffect } from 'react';
// import './numSupllier.css';
// import logo from './Logo.png';

function MainComponentNumSupllier() {
    const [organizations, setOrganizations] = useState([]);
    const [selectedOrganization, setSelectedOrganization] = useState('');
    const [selectedSupplier, setSelectedSupplier] = useState({ key: '', value: '' });
    const [selectedSupplierKey, setSelectedSupplierKey] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://yizhakeliezer.github.io/Supplier/refael.json');
                const data = await response.json();
                //  console.log(data);
                setOrganizations(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    
    const handleOrganizationSelect = (value) => {
        const org = organizations.find(org => Object.keys(org)[0] === value);
        if (org && Object.keys(org).length > 0) {
            setSelectedOrganization(value);
            if (!selectedSupplier.value) {
                setSelectedSupplierKey(''); // אם המשתמש עדיין לא בחר ספק, נקבע את מפתח הספק לריק
            } else {
                setSelectedSupplierKey(org[Object.keys(org)[0]][0].key);
            }
        } else {
            setSelectedOrganization('');
            setSelectedSupplier({ key: '', value: '' });
            setSelectedSupplierKey('');
        }
    };
    
    
    
    const handleSupplierChange = (e) => {
        const { value } = e.target;
        const selectedOrg = organizations.find(org => Object.keys(org)[0] === selectedOrganization);
        const selectedSupplier = selectedOrg[selectedOrganization].find(supplier => supplier.value === value);
        if (selectedSupplier) {
            setSelectedSupplier(selectedSupplier);
            setSelectedSupplierKey(selectedSupplier.key);
        } else {
            setSelectedSupplier({ key: '', value: '' }); // למקרה שהספק לא נמצא
            setSelectedSupplierKey(''); // גם מוחקים את הערך הקודם במקרה שהספק לא נמצא
        }
    };
    
    

    return (
        <div className="container">
            <div className="titel-container2"></div>
            {/* <img src={logo} alt="logo"></img> */}
            <div className="main-container">
                <input
                    type="text"
                    placeholder="ארגון"
                    className="retailer"
                    list="organizationsList"
                    onChange={(e) => handleOrganizationSelect(e.target.value)}
                />
                <datalist id="organizationsList">
                    {organizations.map((org, index) => (
                        <option key={index} value={Object.keys(org)[0]} />
                    ))}
                </datalist>
                <input
                    type="text"
                    placeholder="ספק"
                    className="supplier"
                    list="suppliersList"
                    onChange={handleSupplierChange}
                />
                 
                 <input
                    type="text"
                    placeholder="מספר ספק"
                    className="numSupplier"
                    value={selectedSupplierKey}
                    readOnly
                />
           
                <datalist id="suppliersList">
                    {selectedOrganization &&
                        organizations
                            .find(org => Object.keys(org)[0] === selectedOrganization)
                            [selectedOrganization].map((supplier, index) => (
                                <option key={index} value={supplier.value} />
                            ))}
                </datalist>
            </div>
        </div>
    );
}

export default MainComponentNumSupllier;
