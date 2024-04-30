import React, { useState, useEffect } from 'react';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import './main.css';
import logo from './Logo.png';
import * as ExcelJS from 'exceljs';
import MainComponentNumSupllier from './numSupllier/numSupllier';




function MainComponent() {
    // const [permissionRows, setPermissionRows] = useState([{ id: 1 }]);
    const [permissionRows, setPermissionRows] = useState([{ id: 1},{ id: 2}]);
    const [supplierId, setSupplierId] = useState("");
    const [nameSupplierId, setNameSupplierId] = useState("");
    const [numSupplierRefael, setNumSupplierRefael] = useState("");
    // const [initialRender, setInitialRender] = useState(true);
    const [buttonClicked, setButtonClicked] = useState(false);
    const [buttonError, setButtonError] = useState(false);
    // const [downloaded, setDownloaded] = useState(false);


    const [permission, setpermission] = useState([]);

    // useEffect(() => {
    //     if (initialRender) {
    //         setInitialRender(false);
    //         handleAddRow();
    //         handleAddRow();
    //     }
    // }, []);

    // useEffect(() => {
    //     // if (initialRender) {
    //     // setInitialRender(false);
    //     handleAddRow();

    //     // }
    // }, []);




    // const handleDownloadExcel = () => {
    //     const data = permissionRows.map(row => {
    //         return [
    //             row.numSupplierRefael,
    //             row.nameSupplierId,
    //             row.nameUser,
    //             row.selectedOption,
    //             row.supplierId,
    //             row.role,
    //             row.email,
    //             row.phone,
    //             row.remarks,
    //             row.idUser

    //         ];
    //     });

    //     const ws = XLSX.utils.aoa_to_sheet([
    //         ["מספר ספק רפאל", "שם ספק", "שם איש קשר", "הרשאה", "ח.פ ספק", "תפקיד", "מייל", "פלאפון", "הערות", "מזהה"],
    //         ...data
    //     ]);

    //     const wb = XLSX.utils.book_new();
    //     XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    //     try {
    //         const wbout = XLSX.write(wb, { type: 'binary', bookType: 'xlsx' });
    //         const excelBuffer = new ArrayBuffer(wbout.length);
    //         const view = new Uint8Array(excelBuffer);
    //         for (let i = 0; i < wbout.length; i++) {
    //             view[i] = wbout.charCodeAt(i) & 0xFF;
    //         }
    //         const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    //         saveAs(blob, 'example.xlsx');
    //     } catch (error) {
    //         console.error('Error while downloading the Excel file:', error);
    //     }
    // };



// const handleDownloadExcel = () => {
//     const data = permissionRows.map(row => {
//         return [
//             row.numSupplierRefael,
//             row.nameSupplierId,
//             row.nameUser,
//             row.selectedOption,
//             row.supplierId,
//             row.role,
//             row.email,
//             row.phone,
//             row.remarks,
//             row.idUser
//         ];
//     });

//     const wsData = [
//         ["מספר ספק רפאל", "שם ספק", "שם איש קשר", "הרשאה", "ח.פ ספק", "תפקיד", "מייל", "פלאפון", "הערות", "מזהה"],
//         ...data
//     ];

//     const ws = XLSX.utils.aoa_to_sheet(wsData);

//     // Setting column styles
//     const columnStyles = [
//         { width: 15 },
//         { width: 15 },
//         { width: 15 },
//         { width: 15 },
//         { width: 15 },
//         { width: 15 },
//         { width: 15 },
//         { width: 15 },
//         { width: 15 },
//         { width: 15 }
//     ];
//     ws['!cols'] = columnStyles;

//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

//     try {
//         const wbout = XLSX.write(wb, { type: 'binary', bookType: 'xlsx' });
//         const excelBuffer = new ArrayBuffer(wbout.length);
//         const view = new Uint8Array(excelBuffer);
//         for (let i = 0; i < wbout.length; i++) {
//             view[i] = wbout.charCodeAt(i) & 0xFF;
//         }
//         const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
//         saveAs(blob, 'example.xlsx');
//     } catch (error) {
//         console.error('Error while downloading the Excel file:', error);
//     }
// };



    
    


    

const handleDownloadExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('Sheet1');

    // Define column headers with right-to-left alignment
    sheet.columns = [
        { header: "הערות נוספות", key: "moreRemarks", width: 19, style: {alignment: {horizontal: 'center'}} },
        { header: "מזהה", key: "idUser", width: 19, style: {alignment: {horizontal: 'center'}} },
        { header: "הערות", key: "remarks", width: 19, style: {alignment: {horizontal: 'center'}} },
        { header: "פלאפון", key: "phone", width: 19, style: {alignment: {horizontal: 'center'}} },
        { header: "מייל", key: "email", width: 19, style: {alignment: {horizontal: 'center'}} },
        { header: "תפקיד", key: "role", width: 19, style: {alignment: {horizontal: 'center'}} },
        { header: "ח.פ ספק", key: "supplierId", width: 19, style: {alignment: {horizontal: 'center'}} },
        { header: "הרשאה", key: "selectedOption", width: 19, style: {alignment: {horizontal: 'center'}} },
        { header: "שם איש קשר", key: "nameUser", width: 19, style: {alignment: {horizontal: 'center'}} },
        { header: "שם ספק", key: "nameSupplierId", width: 19, style: {alignment: {horizontal: 'center'}} },
        { header: "מספר ספק רפאל", key: "numSupplierRefael", width: 19, style: {alignment: {horizontal: 'center'}} }
    ];

    // Add data rows
    permissionRows.forEach(row => {
        sheet.addRow({
            moreRemarks: row.moreRemarks,
            idUser: row.idUser,
            remarks: row.remarks,
            phone: row.phone,
            email: row.email,
            role: row.role,
            supplierId: row.supplierId,
            selectedOption: row.selectedOption,
            nameUser: row.nameUser,
            nameSupplierId: row.nameSupplierId,
            numSupplierRefael: row.numSupplierRefael
        });
    });

    // Style header row
    const headerRow = sheet.getRow(1);
    headerRow.font = { bold: true };
    headerRow.alignment = { horizontal: 'center' };

    // Save the workbook
    try {
        const buffer = await workbook.xlsx.writeBuffer();
        const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        saveAs(blob, (numSupplierRefael)+", "+(nameSupplierId)+'.xlsx');
    } catch (error) {
        console.error('Error while downloading the Excel file:', error);
    }
};














  
































    // useEffect(() => {
    //     if (downloaded) {
    //         document.querySelector('.endScreen').style.display = 'flex';
    //         document.querySelector('body').style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    //         const downloadExcelDiv = document.querySelector(".downloadExcelDiv");
    //           const containers = document.querySelectorAll(".main-container");
    //           downloadExcelDiv.remove();
    //         containers.forEach(container => {
    //             container.remove();
    //         });

    //     }
    // }, [downloaded]);




    const handleButtonClick = () => {
        setButtonClicked(true);
        const elements = document.querySelectorAll("select");
        const allOptionsValid = [...elements].every(element => element.value !== "default");
        if (numSupplierRefael !== "" && nameSupplierId !== "" && supplierId !== "" && allOptionsValid) {
            handleDownloadExcel();
            // setDownloaded(true);

        }
    };



    useEffect(() => {
        if (buttonClicked) {

            const elements = document.querySelectorAll("select");
            elements.forEach(element1 => {
                setpermission([elements]);
    
                if (element1.value === "default") {
                    element1.style.borderBottom = "1px dashed rgb(255 0 0)";
                    element1.classList.add("animated");
                    setTimeout(() => {
                        element1.classList.remove("animated");
                    }, 1000);
                } else {
                    element1.style.borderBottom = "1px dashed rgb(129, 129, 129)";
                }
            });
    
    
            const elementsToCheck = [
                { selector: ".numSupplierRefael", value: numSupplierRefael },
                { selector: ".nameSupplier", value: nameSupplierId },
                { selector: ".bnNumber", value: supplierId }
            ];
    
            elementsToCheck.forEach(({ selector, value }) => {
                const elements = document.querySelectorAll(selector);
                elements.forEach(element => {
                    if (value === "") {
                        element.style.borderBottom = "1px dashed rgb(255 0 0)";
                        element.classList.add("animated");
                        setTimeout(() => {
                            element.classList.remove("animated");
                        }, 1000);
                    } else {
                        element.style.borderBottom = "1px dashed rgb(129, 129, 129)";
                    }
                });
            });
    
            const allOptionsValid = [...elements].every(element => element.value !== "default");
    
            if (numSupplierRefael !== "" && nameSupplierId !== "" && supplierId !== "" && allOptionsValid) {
                setButtonError(false);
            } else {
                setButtonError(true);
            }
        }
    }, [buttonClicked, numSupplierRefael, nameSupplierId, supplierId, permissionRows]);
    







    useEffect(() => {
        const elements = document.querySelectorAll("select");
        
        elements.forEach(element => {
            if (element.value === "default") {
                element.classList.add("defaultOptionPermission");
            } else {
                element.classList.remove("defaultOptionPermission");
            }
        });
    }, [permissionRows]);
    



















    const handleAddRow = () => {
        const newRow = {
            id: permissionRows.length + 1,
            supplierId: supplierId,
            nameSupplierId: nameSupplierId,
            numSupplierRefael: numSupplierRefael
        };
        setPermissionRows(prevRows => [...prevRows, newRow]);
    };

    const handleAddRemove = () => {
        setPermissionRows(permissionRows.slice(0, -1));
    };









    const handleSelectChange = (event, id) => {
        const newRows = permissionRows.map(row => {
            if (row.id === id) {
                return { ...row, selectedOption: event.target.value };
            }
            return row;
        });
        setPermissionRows(newRows);
    };



    // useEffect(() => {
    //     //  handleSelectChange();
    // },[]);



    const handleInputChange = (event, id) => {
        const { name, value } = event.target;
        if (name === "supplierId") {
            setSupplierId(value);
            const updatedRows = permissionRows.map(row => ({
                ...row,
                supplierId: value
            }));
            setPermissionRows(updatedRows);
        } else if (name === "nameSupplierId") {
            setNameSupplierId(value);
            const updatedRows = permissionRows.map(row => ({
                ...row,
                nameSupplierId: value
            }));
            setPermissionRows(updatedRows);
        } else if (name === "numSupplierRefael") {
            setNumSupplierRefael(value);
            const updatedRows = permissionRows.map(row => ({
                ...row,
                numSupplierRefael: value
            }));
            setPermissionRows(updatedRows);
        } else {
            const updatedRows = permissionRows.map(row => {
                if (row.id === id) {
                    return { ...row, [name]: value };
                }
                return row;
            });
            setPermissionRows(updatedRows);
        }
    };








    return (
        <div className="container">
           

            <div className="titel-container"></div>
            <img src={logo} alt="logo"></img>

            {/* <MainComponentNumSupllier /> */}
     

         <span className="titel">
              <p>הערות נוספות</p>
                <p>מזהה</p>
                <p>סטטוס</p>
                <p>פלאפון</p>
                <p>מייל</p>
                <p>תפקיד</p>
                <p>ח.פ ספק</p>
                <p>הרשאה</p>
                <p>שם איש קשר</p>
                <p>שם ספק</p>
                <p>מספר ספק רפאל</p>
            </span> 
            

            {/* Render permission rows */}
            {permissionRows.map(row => (
                <Permission key={row.id} row={row} handleSelectChange={handleSelectChange} selectedOption={row.selectedOption} handleInputChange={(e) => handleInputChange(e, row.id)}
             />
            ))}



            {/* Render download button */}
            <div className='downloadExcelDiv'>
                <Button className={buttonError ? 'downloadExcelError' : 'downloadExcel'} text="הורד קובץ אקסל" onClick={handleButtonClick} />
                <i className="fa-solid fa-plus" onClick={handleAddRow}></i>
                <i className="fa-solid fa-minus" onClick={handleAddRemove}></i>
            </div>


            {/*             
            {downloaded && (
                <div className='endScreen'>
                    <p>הטופס נשלח בהצלחה</p>
                    <p>תודה רבה לכם</p>
                    <button href="inex.html">סגור</button>
                </div>
            )} 
            */}

        </div>
    );

}





function InputUser(props) {
    return (
        // <div>
        //        <p>{props.text}</p>
        <input
            type="text"
            placeholder={props.text}
            value={props.value}
            onChange={props.onChange}
            name={props.name}
            className={props.className} // Use the className prop here
            data-id={props.id}
        />

        // {/* </div> */}
    );
}





function Button(props) {
    return (
        <button className={props.className} onClick={props.onClick}>{props.text}</button>
    );
}






function Permission(props) {
    return (
        <div className="main-container">
            

            <InputUser text="מספר ספק רפאל" className="numSupplierRefael" name="numSupplierRefael" value={props.row.numSupplierRefael} onChange={props.handleInputChange} id={props.row.id} />
            <InputUser text="שם ספק" className="nameSupplier" name="nameSupplierId" value={props.row.nameSupplierId} onChange={props.handleInputChange} id={props.row.id} />
            <InputUser text="שם איש קשר" className="nameUser" name="nameUser" value={props.row.nameUser} onChange={props.handleInputChange} id={props.row.id} />

            <select
                onChange={(event) => props.handleSelectChange(event, props.row.id)}
                value={props.selectedOption}
                // className={props.selectedOption === "default"  ? "defaultOptionPermission" : ""}

            >
                <option value="default">הרשאה</option>
                <option value="בסיסי">בסיסי</option>
                <option value="איכות">איכות</option>
                <option value="כספים">כספים</option>
                <option value="כוללת">כוללת</option>
            </select>

            <InputUser text="ח.פ ספק" name="supplierId" value={props.row.supplierId} onChange={props.handleInputChange} className="bnNumber" id={props.row.id} />
            <InputUser text="תפקיד" className="role" name="role" value={props.row.role} onChange={props.handleInputChange} id={props.row.id} />
            <InputUser text="מייל" className="email" name="email" value={props.row.email} onChange={props.handleInputChange} id={props.row.id} />
            <InputUser text="פלאפון" className="phone" name="phone" value={props.row.phone} onChange={props.handleInputChange} id={props.row.id} />
            {/* <InputUser text="הערות" className="remarks" name="remarks" value={props.row.remarks} onChange={props.handleInputChange} id={props.row.id} /> */}
            <select
                // onChange={(event) => props.handleSelectChange(event, props.row.id)}
                // value={props.selectedOption}
                className="remarks" name="remarks" value={props.row.remarks} onChange={props.handleInputChange} id={props.row.id}
            >
                <option value="default">הוספה/הסרה</option>
                <option value="הוספה">הוספה</option>
                <option value="הסרה">הסרה</option>
                <option value="עדכון">עדכון</option>
            </select>
            <InputUser text="מזהה" className="idUser" name="idUser" value={props.row.idUser} onChange={props.handleInputChange} id={props.row.id} />
             <InputUser text="הערות נוספות" className="moreRemarks" name="moreRemarks" value={props.row.moreRemarks} onChange={props.handleInputChange} id={props.row.id} />

        </div>
    );




}

export default MainComponent;
