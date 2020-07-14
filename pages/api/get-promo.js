import { GoogleSpreadsheet } from 'google-spreadsheet'

//import credentials from '../../credentials.json'

//const doc = new GoogleSpreadsheet('')
const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

const fromBase64 = value => {
    const buff = new Buffer.from(value, 'base64');
    return buff.toString('ascii');
}


export default async (req, res) => {
    console.log(fromBase64(process.env.SHEET_PRIVATE_KEY))
    //console.log(process.env.VAR1)
    try {
        //await doc.useServiceAccountAuth(credentials)
        await doc.useServiceAccountAuth({
           client_email: process.env.SHEET_CLIENT_EMAIL,
           private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
        })
        await doc.loadInfo()
        //console.log(doc.title)
        //carregar a planilhas
        const sheet = doc.sheetsByIndex[2]
        await sheet.loadCells('A2:B2')
        //console.log(sheet.title)
        //pegar os dados da planilha configuraçoes da celula verdadeiro/false
        //const cell = sheet.getCell(1, 0)
        //console.log(cell.value)

        //pega o resultado verdadeiro/falso
        const mostrarPromocaoCell = sheet.getCell(1, 0)
        //console.log(mostrarPromocaoCell.value)
        //pega o texto da celula
        const textoCell = sheet.getCell(1, 1)
        //console.log(textoCell.value)
        res.end(JSON.stringify({
            showCoupon: mostrarPromocaoCell.value === 'VERDADEIRO',
            message: textoCell.value
        }))

    } catch (err) {
        console.log(err)
        res.end(JSON.stringify({
            showCoupon: false,
            message: ''
        }))
    }
}
