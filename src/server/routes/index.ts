import { Router } from "express";
const router = Router();
router.get('/', (req, res) => {
    console.log(req.url);
    return res.send('Get Request');
});

router.post('/', (req, res) => {
    console.log(req.body)
    return res.send('Post Request');
});

router.put('/', (req, res) => {
    return res.send('Put Request');
});

router.delete('/:id', (req, res) => {
    console.log(`O parametro foi ${req.params.id}`)
    return res.send('Delete Request');
});
// router.delete('/', (req, res) => {
//     console.log(`O parametro foi ${req.query.id}`)
//     return res.send('Delete Request');
// });

export { router };