import { useState } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter
} from 'mdb-react-ui-kit';

export const Memories = () => {
    const [memories, setMemories] = useState([
        {
            name: 'CJ',
            memory: 'Words',
            date: '05/31/23',
        },
        {
            name: 'CJ2',
            memory: 'Words2',
            date: '05/31/23',
        },
    ]);

    return (
        <>
            <div className="d-flex justify-content-center m-2">
                <h5>
                    Please share your favorite memories here. All are welcome, we just ask that you remain kind and courtious of others. You are welcome to post anonymously. Thank you.
                </h5>
            </div>

            {memories.map((memory) => {
                return (
                    <MDBCard alignment='center' className='m-4'>
                        <MDBCardBody>
                            <MDBCardTitle>Posted By {memory.name}</MDBCardTitle>
                            <MDBCardText>
                                {memory.memory}
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter>{memory.date}</MDBCardFooter>
                    </MDBCard>
                )
            })}
        </>
    );
}