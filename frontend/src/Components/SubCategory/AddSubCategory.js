import React, { Component } from 'react';
import Sidebar from '../Common/Sidebar';
import Header from '../Common/Header';
import { FormGroup, Label, Input, Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap';

class AddSubCategory extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <div className="col-4.5" style={{ minHeight: "93vh" }}>
                        <Sidebar />
                    </div>
                    <div className="col d-flex justify-content-center">
                        <Card className='mt-2' style={{ minWidth: '50%', maxHeight: "60vh" }}>
                            <CardHeader style={{ color: 'white', backgroundColor: 'black' }} className="d-flex justify-content-center">Sub-Category Information</CardHeader>
                            <CardBody>
                                <FormGroup>
                                    <Label>Sub-Category ID</Label>
                                    <Input placeholder="Ex. L101" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Sub-Category Name</Label>
                                    <Input placeholder="Ex. Laptop" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Category ID</Label>
                                    <Input placeholder="Ex. E101" type="text" />
                                </FormGroup>
                            </CardBody>
                            <CardFooter>
                                <div className="d-flex justify-content-center">
                                    <Button color="primary">Add Category</Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddSubCategory;
