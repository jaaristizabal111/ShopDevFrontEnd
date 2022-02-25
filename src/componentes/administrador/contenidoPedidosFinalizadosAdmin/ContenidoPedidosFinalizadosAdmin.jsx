import './ContenidoPedidosFinalizadosAdmin.css';
import { HeaderAdmin } from '../../administrador/headerAdmin/HeaderAdmin';
import { BarraLateral } from '../../administrador/barraLateral/BarraLateral';

export const ContenidoPedidosFinalizadosAdmin = () => {
    return (
        <>
            <HeaderAdmin></HeaderAdmin>
            <BarraLateral></BarraLateral>
            <main>
                <div className='container'>
                    <h1>PEDIDOS</h1>
                    <div className='containerButtons'>
                        <button class="btn bg-light" type="submit">Entregados</button>
                        <button class="btn bg-light" type="submit">Devueltos</button>
                        <button class="btn bg-light" type="submit">Cancelados</button>
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