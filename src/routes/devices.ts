import express from 'express'
import * as devicesServices from '../services/devices'

const router = express.Router()

router.get('/users/toribio', (_req, res) => {
  res.send(devicesServices.getUser())
})

router.get('/users/toribio/temperature/:val', (req,res)=>{

    try{
        devicesServices.getUser().houses[0].devices[0].temperatureC = parseInt(req.params.val)
        devicesServices.getUser().houses[0].devices[0].temperatureF = (parseInt(req.params.val) * (9/5)) + 32.0

        res.send(parseInt(req.params.val) + ' °C')
    }catch (e:any){
        res.status(404).send(e)
    }

})

router.get('/users/toribio/humidity/:val', (req,res)=>{

    try{
        devicesServices.getUser().houses[0].devices[0].humidity = parseFloat(req.params.val)

        res.send(parseFloat(req.params.val) + ' %')
    }catch (e:any){
        res.status(404).send(e)
    }

})

export default router
