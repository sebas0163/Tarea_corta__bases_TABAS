import { PdfMakeWrapper, Img, Txt, Table } from 'pdfmake-wrapper';
import * as pdfFonts from "pdfmake/build/vfs_fonts";

export class Bill {

    clave: string;
    codigoActividad: string;
    numeroConsecutivo: string;
    fechaEmision: string;
    nombre: string;
    idTipo: string;
    idNumero: string;
    nombreComercial: string;
    provincia: string;
    canton: string;
    distrito: string;
    usuario: string;
    idRTipo: string;
    idRNumero: string;
    email: string;
    condiVenta: string;
    medioPago: string;
    numeroLinea: string;
    tipoCC: string;
    codigoCC: string;
    cantidad: string;
    unidadMedida: string;
    unidadMedidaComercial: string;
    detalle: string;
    precioUnitario: string;
    montoTotal: string;
    subTotal: string;
    codigoImpuesto: string;
    codigoTarifaImp: string;
    tarifaImpuesto: string;
    montoImpuesto: string;
    impuestoNeto: string;
    montoTotalLinea: string;
    codigoMoneda: string;
    tipoCambio: string;
    totalMercaGrav: string;
    totalGravado: string;
    totalVenta: string;
    totalVentaNeta: string;
    totalImpuesto: string;
    totalComprobante: string;

    constructor(clave: string, codigoActividad: string,
        numeroConsecutivo: string,
        fechaEmision: string,
        nombre: string,
        idTipo: string,
        idNumero: string,
        nombreComercial: string,
        provincia: string,
        canton: string,
        distrito: string,
        usuario: string,
        idRTipo: string,
        idRNumero: string,
        email: string,
        condiVenta: string,
        medioPago: string,
        numeroLinea: string,
        tipoCC: string,
        codigoCC: string,
        cantidad: string,
        unidadMedida: string,
        unidadMedidaComercial: string,
        detalle: string,
        precioUnitario: string,
        montoTotal: string,
        subTotal: string,
        codigoImpuesto: string,
        codigoTarifaImp: string,
        tarifaImpuesto: string,
        montoImpuesto: string,
        impuestoNeto: string,
        montoTotalLinea: string,
        codigoMoneda: string,
        tipoCambio: string,
        totalMercaGrav: string,
        totalGravado: string,
        totalVenta: string,
        totalVentaNeta: string,
        totalImpuesto: string,
        totalComprobante: string) {

        this.clave = clave;
        this.codigoActividad = codigoActividad;
        this.numeroConsecutivo = numeroConsecutivo;
        this.fechaEmision = fechaEmision;
        this.nombre = nombre;
        this.idTipo = idTipo;
        this.idNumero = idNumero;
        this.nombreComercial = nombreComercial;
        this.provincia = provincia;
        this.canton = canton;
        this.distrito = distrito;
        this.usuario = usuario;
        this.idRTipo = idRTipo;
        this.idRNumero = idRNumero;
        this.email = email;
        this.condiVenta = condiVenta;
        this.medioPago = medioPago;
        this.numeroLinea = numeroLinea;
        this.tipoCC = tipoCC;
        this.codigoCC = codigoCC;
        this.cantidad = cantidad;
        this.unidadMedida = unidadMedida;
        this.unidadMedidaComercial = unidadMedidaComercial;
        this.detalle = detalle;
        this.precioUnitario = precioUnitario;
        this.montoTotal = montoTotal;
        this.subTotal = subTotal;
        this.codigoImpuesto = codigoImpuesto;
        this.codigoTarifaImp = codigoTarifaImp;
        this.tarifaImpuesto = tarifaImpuesto;
        this.montoImpuesto = montoImpuesto;
        this.impuestoNeto = impuestoNeto;
        this.montoTotalLinea = montoTotalLinea;
        this.codigoMoneda = codigoMoneda;
        this.tipoCambio = tipoCambio;
        this.totalMercaGrav = totalMercaGrav;
        this.totalGravado = totalGravado;
        this.totalVenta = totalVenta;
        this.totalVentaNeta = totalVentaNeta;
        this.totalImpuesto = totalImpuesto;
        this.totalComprobante = totalComprobante;

    }

    public async generatePDF() {

        PdfMakeWrapper.setFonts(pdfFonts);

        const pdf = new PdfMakeWrapper();

        // pdf.images({
        //     picture1: await new Img('https://drive.google.com/file/d/10YdYWGJTZNJnACkVGrfOeyVjzvRaIHlg/view?usp=sharing').build()
        // });

        pdf.add(new Txt('TABAS').bold().end);
        pdf.add("");
        pdf.add("");
        pdf.add("");
        pdf.add(new Table([
            ['column 1', 'column 2'],
            ['column 1', 'column 2']
        ]).end);
        pdf.add("");
        pdf.add("");
        pdf.add("");
        pdf.add(new Table([
            ['column 1', 'column 2'],
            ['column 1', 'column 2']
        ]).end);

        //pdf.create().open();

        var data: any;

        pdf.create().getBase64(function (encodedString: any) {
            data = encodedString;
        }
        );

        //pdf.create().getBase64((encodedString) => (data = encodedString));

        return data;

    }

    public createXML() {

        var doc = document.implementation.createDocument("", "", null);

        var xml = doc.createElement("xml");

        var claveElem = doc.createElement("Clave");
        claveElem.innerHTML = this.clave;
        xml.appendChild(claveElem);

        var codigoActElem = doc.createElement("CodigoActividad");
        codigoActElem.innerHTML = this.codigoActividad;
        xml.appendChild(codigoActElem);

        var numeroConElem = doc.createElement("NumeroConsecutivo");
        numeroConElem.innerHTML = this.numeroConsecutivo;
        xml.appendChild(numeroConElem);

        var fechaEmiElem = doc.createElement("FechaEmision");
        fechaEmiElem.innerHTML = this.fechaEmision;
        xml.appendChild(fechaEmiElem);

        this.appendEmisor(doc, xml);

        this.appendReceptor(doc, xml);

        var MedioPagoElem = doc.createElement("CondicionVenta");
        MedioPagoElem.innerHTML = this.condiVenta;
        xml.appendChild(MedioPagoElem);

        var MedioPagoElem = doc.createElement("MedioPago");
        MedioPagoElem.innerHTML = this.medioPago;
        xml.appendChild(MedioPagoElem);

        this.appendDetalleServicio(doc, xml);

        this.appendResumen(doc, xml);

        doc.appendChild(xml);

        return doc;

    }
    appendResumen(xml: any, doc: any) {

        var resumenElem = xml.createElement("ResumenFactura");

        var codTipoMonElem = xml.createElement("CodigoTipoMoneda");
        var codMonedaElem = xml.createElement("CodigoMoneda");
        codMonedaElem.innerHTML = this.codigoMoneda;
        codTipoMonElem.appendChild(codMonedaElem);
        var tipoCambioElem = xml.createElement("TipoCambio");
        tipoCambioElem.innerHTML = this.tipoCambio;
        codTipoMonElem.appendChild(tipoCambioElem);
        resumenElem.appendChild(codTipoMonElem);

        var totMerGravElem = xml.createElement("TotalMercanciasGravadas");
        totMerGravElem.innerHTML = this.totalMercaGrav;
        resumenElem.appendChild(totMerGravElem);

        var totalGravElem = xml.createElement("TotalGravado");
        totalGravElem.innerHTML = this.totalGravado;
        resumenElem.appendChild(totalGravElem);

        var totalVentaElem = xml.createElement("TotalVenta");
        totalVentaElem.innerHTML = this.totalVenta;
        resumenElem.appendChild(totalVentaElem);

        var totalVentaNetaElem = xml.createElement("TotalVentaNeta");
        totalVentaNetaElem.innerHTML = this.totalVentaNeta;
        resumenElem.appendChild(totalVentaNetaElem);

        var totalImpElem = xml.createElement("TotalImpuesto");
        totalImpElem.innerHTML = this.totalImpuesto;
        resumenElem.appendChild(totalImpElem);

        var totalCompElem = xml.createElement("TotalComprobante");
        totalCompElem.innerHTML = this.totalComprobante;
        resumenElem.appendChild(totalCompElem);

        doc.appendChild(resumenElem);
    }
    appendDetalleServicio(xml: any, doc: any) {

        var detalleSerElem = xml.createElement("DetalleServicio");

        var lineaDetElem = xml.createElement("LineaDetalle");

        var numLineaElem = xml.createElement("NumeroLinea");
        numLineaElem.innerHTML = this.numeroLinea;
        lineaDetElem.appendChild(numLineaElem);
        var codigoComElem = xml.createElement("CodigoComercial");
        var tipoElem = xml.createElement("Tipo");
        tipoElem.innerHTML = this.tipoCC;
        codigoComElem.appendChild(tipoElem);
        var codigoElem = xml.createElement("Codigo");
        codigoElem.innerHTML = this.codigoCC;
        codigoComElem.appendChild(codigoElem);
        lineaDetElem.appendChild(codigoComElem);
        var cantidadElem = xml.createElement("Cantidad");
        cantidadElem.innerHTML = this.cantidad;
        lineaDetElem.appendChild(cantidadElem);
        var unidadMedElem = xml.createElement("UnidadMedida");
        unidadMedElem.innerHTML = this.unidadMedida;
        lineaDetElem.appendChild(unidadMedElem);
        var unidadMedComElem = xml.createElement("UnidadMedidaComercial");
        unidadMedComElem.innerHTML = this.unidadMedidaComercial;
        lineaDetElem.appendChild(unidadMedComElem);
        var detalleElem = xml.createElement("Detalle");
        detalleElem.innerHTML = this.detalle;
        lineaDetElem.appendChild(detalleElem);
        var precioUniElem = xml.createElement("PrecioUnitario");
        precioUniElem.innerHTML = this.precioUnitario;
        lineaDetElem.appendChild(precioUniElem);
        var montoTotalElem = xml.createElement("MontoTotal");
        montoTotalElem.innerHTML = this.montoTotal;
        lineaDetElem.appendChild(montoTotalElem);
        var subTotalElem = xml.createElement("SubTotal");
        subTotalElem.innerHTML = this.subTotal;
        lineaDetElem.appendChild(subTotalElem);
        var impuestoElem = xml.createElement("Impuesto");
        var codImpElem = xml.createElement("Codigo");
        codImpElem.innerHTML = this.codigoImpuesto;
        impuestoElem.appendChild(codImpElem);
        var codTarElem = xml.createElement("CodigoTarifa");
        codTarElem.innerHTML = this.codigoTarifaImp;
        impuestoElem.appendChild(codTarElem);
        var tarifaElem = xml.createElement("Tarifa");
        tarifaElem.innerHTML = this.tarifaImpuesto;
        impuestoElem.appendChild(tarifaElem);
        var montoElem = xml.createElement("Monto");
        montoElem.innerHTML = this.montoImpuesto;
        impuestoElem.appendChild(montoElem);
        lineaDetElem.appendChild(impuestoElem);

        var impNetoElem = xml.createElement("ImpuestoNeto");
        impNetoElem.innerHTML = this.impuestoNeto;
        lineaDetElem.appendChild(impNetoElem);
        var montoTotLinElem = xml.createElement("MontoTotalLinea");
        montoTotLinElem.innerHTML = this.montoTotalLinea;
        lineaDetElem.appendChild(montoTotLinElem);

        detalleSerElem.appendChild(lineaDetElem);

        doc.appendChild(detalleSerElem);
    }
    appendReceptor(xml: any, doc: any) {

        var receptorElem = xml.createElement("Receptor");

        var nombreElem = xml.createElement("Nombre");
        nombreElem.innerHTML = this.usuario;
        receptorElem.appendChild(nombreElem);

        var identifiacionElem = xml.createElement("Identificacion");
        var tipoElem = xml.createElement("Tipo");
        tipoElem.innerHTML = this.idRTipo;
        identifiacionElem.appendChild(tipoElem);
        var numeroElem = xml.createElement("Numero");
        numeroElem.innerHTML = this.idRNumero;
        identifiacionElem.appendChild(numeroElem);
        receptorElem.appendChild(identifiacionElem);

        var emailElem = xml.createElement("CorreoElectronico");
        emailElem.innerHTML = this.email;
        receptorElem.appendChild(emailElem);

        doc.appendChild(receptorElem);

    }

    appendEmisor(xml: any, doc: any) {

        var emisorElem = xml.createElement("Emisor");

        var nombreElem = xml.createElement("Nombre");
        nombreElem.innerHTML = this.nombre;
        emisorElem.appendChild(nombreElem);

        var idElem = xml.createElement("Identificacion");
        var tipoElem = xml.createElement("Tipo");
        tipoElem.innerHTML = this.idTipo;
        idElem.appendChild(tipoElem);
        var numeroElem = xml.createElement("Numero");
        numeroElem.innerHTML = this.idNumero;
        idElem.appendChild(numeroElem);
        emisorElem.appendChild(idElem);

        var NombreComElem = xml.createElement("NombreComercial");
        NombreComElem.innerHTML = this.nombreComercial;
        emisorElem.appendChild(NombreComElem);

        var UbicacionElem = xml.createElement("Ubicacion");
        var provinciaElem = xml.createElement("Provincia");
        provinciaElem.innerHTML = this.provincia;
        UbicacionElem.appendChild(provinciaElem);
        var CantonElem = xml.createElement("Canton");
        CantonElem.innerHTML = this.canton;
        UbicacionElem.appendChild(CantonElem);
        var distritoElem = xml.createElement("Distrito");
        distritoElem.innerHTML = this.distrito;
        UbicacionElem.appendChild(distritoElem);
        var otrasSenElem = xml.createElement("OtrasSenas");
        otrasSenElem.innerHTML = "N/A";
        UbicacionElem.appendChild(otrasSenElem);
        emisorElem.appendChild(UbicacionElem);

        var emailElem = xml.createElement("CorreoElectronico");
        emailElem.innerHTML = "factura@tabas.com";
        emisorElem.appendChild(emailElem);

        doc.appendChild(emisorElem);

    }
}

