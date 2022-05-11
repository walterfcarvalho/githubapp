'user strict'

const pagination = ({total =1, activePage =1}) => {
    
    if (typeof total !== 'number' || typeof activePage !== 'number'){
         throw new TypeError('Total and activePage should be a number')
    }
    
    if(total <= 5) {
        return  Array.from({length:total}, (_,i) => i + 1)
    } 
    
    const visiblePages = 3
    const segundo =  activePage > 3 ? '...' : 2  
    const penultimo =  total - activePage > 2 ? '...' : total -1  

    let grupo = [activePage -1, activePage, activePage +1]

    if (activePage-1 <= segundo){
        grupo = grupo.slice(1)
    }
    if (activePage +1 >= penultimo){
        grupo = grupo.slice(0,2)
    }

    let aux = [ 1, segundo, ...grupo, penultimo, total ]
    
    let res = []

    for( let i=0; i < aux.length; i++ ){
        if( res.includes(aux[i]) === false || aux[i] == '...' ){
                res.push(aux[i])
        }    
    }
    return res
}

export default pagination
