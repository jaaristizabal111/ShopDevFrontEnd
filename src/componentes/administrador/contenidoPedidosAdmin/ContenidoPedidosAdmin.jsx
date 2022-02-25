import { BarraLateral } from '../barraLateral/BarraLateral';
import { HeaderAdmin } from '../headerAdmin/HeaderAdmin';
import './ContenidoPedidosAdmin.css';

export const ContenidoPedidosAdmin = () => {
    return (
        <>
            <HeaderAdmin></HeaderAdmin>
            <BarraLateral></BarraLateral>
            <main>
                <div className='container'>
                <h1>PEDIDOS</h1>
                <div className='containerBreadcrumbs'>
                    <div className='breadcrumbs'>
                        <a href="#">Por preparar</a>
                    </div>
                    <div className='breadcrumbs'>
                        <a href="#">Finalizados</a>
                    </div>
                </div>
                <h2>Por preparar</h2>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col"># ORDEN</th>
                            <th scope="col">FECHA</th>
                            <th scope="col">CLIENTE</th>
                            <th scope="col">PRODUCTO</th>
                            <th scope="col">VALOR</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </main>
        </>
    )
}