
import express from "express"
import cors from 'cors'
import db from "./database/db.js"
import cotizacionRoutes from './routes/CotizacionRoutes.js'
import clienteRoutes from './routes/ClienteRoutes.js'
import itemRoutes from './routes/CotizacionItemRoutes.js'
import suministroRoutes from './routes/CotizacionSuministroRoutes.js'
import authRoutes from "./routes/AuthRoutes.js"
import SeguimientoRoutes from "./routes/SeguimientoRoutes.js"
import visitasRoutes from "./routes/VisitasRoutes.js"

const app = express()
app.use(cors())
app.use(express.json())

// definimos los prefijos de ruta
app.use('/cotizaciones', cotizacionRoutes)
app.use('/clientes', clienteRoutes)
app.use('/items', itemRoutes)
app.use('/suministros', suministroRoutes)
app.use("/auth", authRoutes)
app.use("/seguimiento",  SeguimientoRoutes)
app.use("/visita",  visitasRoutes)

try {
    await db.authenticate()
    console.log('Conexión exitosa a la DB')
} catch (error) {
    console.log(`Error de conexión: ${error}`)
}
// Servidor activo
app.listen(8000, () => {
    console.log('Servidor corriendo en http://localhost:8000/')
})