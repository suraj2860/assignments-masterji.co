import Thumbnail1 from '../../../public/thumbnail1.png';
import Thumbnail2 from '../../../public/thumbnail2.png';
import Thumbnail3 from '../../../public/thumbnail3.png';
import Thumbnail4 from '../../../public/thumbnail4.png';
import Thumbnail5 from '../../../public/thumbnail5.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripVertical, faEllipsisVertical, faArrowUpLong, faArrowDownLong, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';
import { useEffect } from 'react';

const ProductList = () => {

    const [dropdownOpenIndex, setDropdownOpenIndex] = useState(null);
    const dropdownRefs = useRef([]);

    const [products, setProducts] = useState(
        [
            {
                id: 1,
                thumbnail: Thumbnail1,
                title: "Interview preparation with JavaScript 2.0",
                price: "Rs. 9000/-",
                type: "Course"
            },
            {
                id: 2,
                thumbnail: Thumbnail2,
                title: "Aptitude - Averages, Mixtures & Allegation",
                price: "Free",
                type: "Mock Test"
            },
            {
                id: 3,
                thumbnail: Thumbnail3,
                title: "Aptitude - Simple & Compound Interest",
                price: "Free",
                type: "Mock Test"
            },
            {
                id: 4,
                thumbnail: Thumbnail4,
                title: "Aptitude - Partnership",
                price: "Free",
                type: "Mock Test"
            },
            {
                id: 5,
                thumbnail: Thumbnail5,
                title: "Aptitude - Time & Work",
                price: "Free",
                type: "Mock Test"
            }
        ]
    );

    const dragProduct = useRef(null);
    const draggedOverProduct = useRef(null);


    const handleDrag = () => {
        const _products = [...products];
        const draggedItemContent = _products.splice(dragProduct.current, 1)[0];
        _products.splice(draggedOverProduct.current, 0, draggedItemContent);

        dragProduct.current = null;
        draggedOverProduct.current = null;

        setProducts(_products);
    }

    const handleDropdownToggle = (index) => {
        setDropdownOpenIndex(index === dropdownOpenIndex ? null : index);
    };

    const handleClickOutside = (event) => {
        dropdownRefs.current.forEach((ref, index) => {
            const dropdownElement = ref.dropdown;
            const triggerElement = ref.trigger;

            if (dropdownElement && !dropdownElement.contains(event.target) &&
                triggerElement && !triggerElement.contains(event.target)) {
                if (dropdownOpenIndex === index) {
                    setDropdownOpenIndex(null);
                }
            }
        });
    };

    const moveToTop = (index) => {
        const updatedProducts = [...products];
        const [movedProduct] = updatedProducts.splice(index, 1);
        updatedProducts.unshift(movedProduct);
        setProducts(updatedProducts);
        setDropdownOpenIndex(null);
    };

    const moveToBottom = (index) => {
        const updatedProducts = [...products];
        const [movedProduct] = updatedProducts.splice(index, 1);
        updatedProducts.push(movedProduct);
        setProducts(updatedProducts);
        setDropdownOpenIndex(null);
    }

    const removeProduct = (index) => {
        const updatedProducts = [...products];
        updatedProducts.splice(index, 1);
        setProducts(updatedProducts);
        setDropdownOpenIndex(null);
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownOpenIndex]);

    return (
        <div className='flex flex-col items-center pt-4  bg-green-300 h-screen '>
            <div className='text-5xl font-bold text-green-800'>Chai aur Code</div>

            <div className='flex flex-col bg-white mt-8 border rounded-xl w-auto p-6'>
                <h1 className='text-2xl font-bold'>Manage Bundle</h1>
                <p className='text-gray-700 py-2'>Change orders of the products based on priority</p>

                <table>
                    {products.map((product, index) => (
                        <tr
                            key={index}
                            className='flex items-center h-20 border mt-2 mr-16 shadow-lg  rounded-lg'
                            draggable
                            onDragStart={() => (dragProduct.current = index)}
                            onDragEnter={() => (draggedOverProduct.current = index)}
                            onDragEnd={handleDrag}
                            onDragOver={(e) => e.preventDefault()}
                        >
                            <td><FontAwesomeIcon icon={faGripVertical} className='mx-6 hover:cursor-move' color='gray' /></td>
                            <td className='flex items-center h-12 w-32 border rounded-lg mr-6'><img src={product.thumbnail} className='border rounded-lg' /></td>
                            <td className='text-base font-medium w-96'>{product.title}</td>
                            <td className='w-72 text-right text-sm'>{product.price}</td>
                            <td className=' text-xs text-center w-40 flex justify-center'><div className='bg-green-200 w-16 border rounded-md'>{product.type}</div></td>
                            <td>
                                <FontAwesomeIcon
                                    icon={faEllipsisVertical}
                                    className='mr-8 hover:cursor-pointer'
                                    width={32}
                                    onClick={() => handleDropdownToggle(index)}
                                    ref={el => (dropdownRefs.current[index] = {
                                        trigger: el,
                                        dropdown: dropdownRefs.current[index]?.dropdown
                                    })}
                                />
                                {dropdownOpenIndex === index && (
                                    <div
                                        className='absolute mt-2 w-32 bg-white border rounded-lg shadow-lg text-xs font-medium'
                                        ref={el => (dropdownRefs.current[index] = {
                                            trigger: dropdownRefs.current[index]?.trigger,
                                            dropdown: el
                                        })}
                                    >
                                        <ul>
                                            <li
                                                className='p-2 hover:bg-gray-200 cursor-pointer'
                                                onClick={() => {
                                                    moveToTop(index);
                                                }}
                                            >
                                                <FontAwesomeIcon icon={faArrowUpLong} /> Move To Top
                                            </li>
                                            <li className='p-2 hover:bg-gray-200 cursor-pointer' onClick={() => moveToBottom(index)}><FontAwesomeIcon icon={faArrowDownLong} /> Move To Bottom</li>
                                            <li className='p-2 hover:bg-gray-200 cursor-pointer text-red-600' onClick={() => removeProduct(index)}><FontAwesomeIcon icon={faTrashCan} /> Remove</li>
                                        </ul>
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    )
}

export default ProductList