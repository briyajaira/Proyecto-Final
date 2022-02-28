sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */

    function (Controller) {
        "use strict";

        function onInit() {

        }

        //Función para ir a la Firma del Pedido
        function onAfterRendering() {
            // Error en el framework : Al agregar la dirección URL de "Firmar pedidos", el componente GenericTile debería navegar directamente a dicha URL,
            // pero no funciona en la version 1.78. Por tanto, una solución  encontrada es eliminando la propiedad id del componente por jquery
            let genericTileFirmarPedido = this.byId("linkFirmarPedido");

            //Id del dom
            let idGenericTileFirmarPedido = genericTileFirmarPedido.getId();

            //Se vacia el id
            jQuery("#"+idGenericTileFirmarPedido)[0].id = "";
        }

        //Función para ir a la Vista de Crear Empleado
        function navToCreateEmployee() {
            //Se obtiene el conjuntos de routers del programa
            let oRouter = sap.ui.core.UIComponent.getRouterFor(this);

            //Se navega hacia el router "CreateEmployee"
            oRouter.navTo("CreateEmployee", {}, false);
        }

        //Función para ir a la Vista de Ver Empleados
        function navToShowEmployee() {
            //Se obtiene el conjuntos de routers del programa
            let oRouter = sap.ui.core.UIComponent.getRouterFor(this);

            //Se navega hacia el router "CreateEmployee"
            oRouter.navTo("ShowEmployee", {}, false);
        }

        function firmaPedidos() {
            window.open("https://08899d6dtrial-dev-logali-approuter.cfapps.us10.hana.ondemand.com/logaligroupemployees/index.html", "_blank")

        }

        return Controller.extend("logaligroup.employee.controller.Menu", {
            onInit: onInit,
            //onAfterRendering: onAfterRendering,
            firmaPedidos: firmaPedidos,
            navToCreateEmployee: navToCreateEmployee,
            navToShowEmployee: navToShowEmployee
        });

    });