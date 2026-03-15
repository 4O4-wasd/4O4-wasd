"use client";

import {
    AlertDialog,
    Avatar,
    Button,
    ButtonGroup,
    Calendar,
    Card,
    Checkbox,
    CheckboxGroup,
    CloseButton,
    ComboBox,
    DateField,
    DatePicker,
    Description,
    Disclosure,
    Drawer,
    Dropdown,
    FieldError,
    Form,
    Input,
    Kbd,
    Label,
    Link,
    ListBox,
    NumberField,
    Pagination,
    Radio,
    RadioGroup,
    SearchField,
    Select,
    Separator,
    Slider,
    Spinner,
    Switch,
    Table,
    TextArea,
    TextField,
    toast,
} from "@heroui/react";
import { useState } from "react";

export default function PrimitiveDemo() {
    const [checked, setChecked] = useState(false);
    const [on, setOn] = useState(false);
    const [langs, setLangs] = useState<string[]>(["ts"]);
    const [vol, setVol] = useState(40);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data: Record<string, string> = {};
        // Convert FormData to plain object
        formData.forEach((value, key) => {
            data[key] = value.toString();
        });
        alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
    };

    return (
        <div className="flex flex-col gap-6 p-8 bg-background text-foreground pb-96">
            {/* Text inputs */}
            <TextField>
                <Label>Username</Label>
                <Input placeholder="atom_one" />
            </TextField>

            <TextField isInvalid>
                <Label>Email</Label>
                <Input type="email" placeholder="dev@example.com" />
                <FieldError>Invalid email address</FieldError>
            </TextField>

            <TextField isDisabled>
                <Label>Read only</Label>
                <Input defaultValue="cannot edit" />
                <Description>This field is locked</Description>
            </TextField>

            <TextArea placeholder="Write something…" rows={3} />

            <SearchField />

            <NumberField defaultValue={1} minValue={0} maxValue={99}>
                <Label>Quantity</Label>
            </NumberField>

            <Separator />

            {/* Toggles */}
            <Checkbox isSelected={checked} onChange={setChecked}>
                <Checkbox.Control>
                    <Checkbox.Indicator />
                </Checkbox.Control>
                <Checkbox.Content>
                    <Label>Accept terms and conditions</Label>
                </Checkbox.Content>
            </Checkbox>

            <CheckboxGroup value={langs} onChange={setLangs}>
                <Label>Languages</Label>
                <Checkbox value="ts">
                    <Checkbox.Control>
                        <Checkbox.Indicator />
                    </Checkbox.Control>
                    <Checkbox.Content>
                        <Label>TypeScript</Label>
                    </Checkbox.Content>
                </Checkbox>
                <Checkbox value="js">
                    <Checkbox.Control>
                        <Checkbox.Indicator />
                    </Checkbox.Control>
                    <Checkbox.Content>
                        <Label>JavaScript</Label>
                    </Checkbox.Content>
                </Checkbox>
                <Checkbox value="rs" isDisabled>
                    <Checkbox.Control>
                        <Checkbox.Indicator />
                    </Checkbox.Control>
                    <Checkbox.Content>
                        <Label>Rust</Label>
                    </Checkbox.Content>
                </Checkbox>
            </CheckboxGroup>

            <RadioGroup defaultValue="dark" orientation="horizontal">
                <Label>Theme</Label>
                <Radio value="dark">Dark</Radio>
                <Radio value="light">Light</Radio>
                <Radio value="system">System</Radio>
            </RadioGroup>

            <Switch isSelected={on} onChange={setOn}>
                {on ? "On" : "Off"}
            </Switch>

            <Separator />

            {/* Slider */}
            <Slider
                value={vol}
                onChange={(v) => setVol(Array.isArray(v) ? v[0] : v)}
                minValue={0}
                maxValue={100}
            >
                <Label>Volume: {vol}</Label>
                <Slider.Output />
                <Slider.Track>
                    <Slider.Fill />
                    <Slider.Thumb />
                </Slider.Track>
            </Slider>

            <Separator />

            {/* Actions */}
            <div className="flex gap-2">
                <Button type="submit">Submit</Button>
                <Button variant="secondary">Save draft</Button>
                <Button variant="ghost">Cancel</Button>
            </div>

            <Drawer>
                <Button variant="secondary">Open Drawer</Button>
                <Drawer.Backdrop>
                    <Drawer.Content placement="right">
                        <Drawer.Dialog>
                            <Drawer.Header>
                                <Drawer.Heading>Drawer Title</Drawer.Heading>
                            </Drawer.Header>
                            <Drawer.Body>
                                <p>
                                    This is a bottom drawer built with React
                                    Aria's Modal component. It slides up from
                                    the bottom of the screen with a smooth CSS
                                    transition.
                                </p>
                            </Drawer.Body>
                            <Drawer.Footer>
                                <Button slot="close" variant="secondary">
                                    Cancel
                                </Button>
                                <Button slot="close">Confirm</Button>
                            </Drawer.Footer>
                        </Drawer.Dialog>
                    </Drawer.Content>
                </Drawer.Backdrop>
            </Drawer>

            <Button onPress={() => toast("Simple message")}>Show toast</Button>

            <Table>
                <Table.ScrollContainer>
                    <Table.Content
                        aria-label="Team members"
                        className="min-w-[600px]"
                    >
                        <Table.Header>
                            <Table.Column isRowHeader>Name</Table.Column>
                            <Table.Column>Role</Table.Column>
                            <Table.Column>Status</Table.Column>
                            <Table.Column>Email</Table.Column>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>Kate Moore</Table.Cell>
                                <Table.Cell>CEO</Table.Cell>
                                <Table.Cell>Active</Table.Cell>
                                <Table.Cell>kate@acme.com</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>John Smith</Table.Cell>
                                <Table.Cell>CTO</Table.Cell>
                                <Table.Cell>Active</Table.Cell>
                                <Table.Cell>john@acme.com</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Sara Johnson</Table.Cell>
                                <Table.Cell>CMO</Table.Cell>
                                <Table.Cell>On Leave</Table.Cell>
                                <Table.Cell>sara@acme.com</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Michael Brown</Table.Cell>
                                <Table.Cell>CFO</Table.Cell>
                                <Table.Cell>Active</Table.Cell>
                                <Table.Cell>michael@acme.com</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table.Content>
                </Table.ScrollContainer>
            </Table>

            <Select className="w-[256px]" placeholder="Select one">
                <Label>State</Label>
                <Select.Trigger>
                    <Select.Value />
                    <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                    <ListBox>
                        <ListBox.Item id="florida" textValue="Florida">
                            Florida
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="delaware" textValue="Delaware">
                            Delaware
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="california" textValue="California">
                            California
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="texas" textValue="Texas">
                            Texas
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="new-york" textValue="New York">
                            New York
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="washington" textValue="Washington">
                            Washington
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                    </ListBox>
                </Select.Popover>
            </Select>

            <ComboBox className="w-[256px]">
                <Label>Favorite Animal</Label>
                <ComboBox.InputGroup>
                    <Input placeholder="Search animals..." />
                    <ComboBox.Trigger />
                </ComboBox.InputGroup>
                <ComboBox.Popover>
                    <ListBox>
                        <ListBox.Item id="aardvark" textValue="Aardvark">
                            Aardvark
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="cat" textValue="Cat">
                            Cat
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="dog" textValue="Dog">
                            Dog
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="kangaroo" textValue="Kangaroo">
                            Kangaroo
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="panda" textValue="Panda">
                            Panda
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="snake" textValue="Snake">
                            Snake
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                    </ListBox>
                </ComboBox.Popover>
            </ComboBox>

            <Dropdown>
                <Button aria-label="Menu" variant="secondary">
                    Actions
                </Button>
                <Dropdown.Popover>
                    <Dropdown.Menu
                        onAction={(key) => console.log(`Selected: ${key}`)}
                    >
                        <Dropdown.Item id="new-file" textValue="New file">
                            <Label>New file</Label>
                        </Dropdown.Item>
                        <Dropdown.Item id="copy-link" textValue="Copy link">
                            <Label>Copy link</Label>
                        </Dropdown.Item>
                        <Dropdown.Item id="edit-file" textValue="Edit file">
                            <Label>Edit file</Label>
                        </Dropdown.Item>
                        <Dropdown.Item
                            id="delete-file"
                            textValue="Delete file"
                            variant="danger"
                        >
                            <Label>Delete file</Label>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown.Popover>
            </Dropdown>

            <DatePicker className="w-64" name="date">
                <Label>Date</Label>
                <DateField.Group fullWidth>
                    <DateField.Input>
                        {(segment) => <DateField.Segment segment={segment} />}
                    </DateField.Input>
                    <DateField.Suffix>
                        <DatePicker.Trigger>
                            <DatePicker.TriggerIndicator />
                        </DatePicker.Trigger>
                    </DateField.Suffix>
                </DateField.Group>
                <DatePicker.Popover>
                    <Calendar aria-label="Event date">
                        <Calendar.Header>
                            <Calendar.YearPickerTrigger>
                                <Calendar.YearPickerTriggerHeading />
                                <Calendar.YearPickerTriggerIndicator />
                            </Calendar.YearPickerTrigger>
                            <Calendar.NavButton slot="previous" />
                            <Calendar.NavButton slot="next" />
                        </Calendar.Header>
                        <Calendar.Grid>
                            <Calendar.GridHeader>
                                {(day) => (
                                    <Calendar.HeaderCell>
                                        {day}
                                    </Calendar.HeaderCell>
                                )}
                            </Calendar.GridHeader>
                            <Calendar.GridBody>
                                {(date) => <Calendar.Cell date={date} />}
                            </Calendar.GridBody>
                        </Calendar.Grid>
                        <Calendar.YearPickerGrid>
                            <Calendar.YearPickerGridBody>
                                {({ year }) => (
                                    <Calendar.YearPickerCell year={year} />
                                )}
                            </Calendar.YearPickerGridBody>
                        </Calendar.YearPickerGrid>
                    </Calendar>
                </DatePicker.Popover>
            </DatePicker>

            <AlertDialog>
                <Button variant="danger">Delete Project</Button>
                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-[400px]">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>
                                    Delete project permanently?
                                </AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                                <p>
                                    This will permanently delete{" "}
                                    <strong>My Awesome Project</strong> and all
                                    of its data. This action cannot be undone.
                                </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                                <Button slot="close" variant="tertiary">
                                    Cancel
                                </Button>
                                <Button slot="close" variant="danger">
                                    Delete Project
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>

            <SearchField name="search">
                <Label>Search</Label>
                <SearchField.Group>
                    <SearchField.SearchIcon />
                    <SearchField.Input
                        className="w-[280px]"
                        placeholder="Search..."
                    />
                    <SearchField.ClearButton />
                </SearchField.Group>
            </SearchField>

            <Kbd className="w-10">
                <Kbd.Abbr keyValue="ctrl">⌘</Kbd.Abbr>
                <Kbd.Content>K</Kbd.Content>
            </Kbd>

            <Spinner />

            <Pagination>
                <Pagination.Summary>
                    Showing 1-10 of 100 results
                </Pagination.Summary>
                <Pagination.Content>
                    <Pagination.Item>
                        <Pagination.Previous>
                            <Pagination.PreviousIcon />
                            <span>Previous</span>
                        </Pagination.Previous>
                    </Pagination.Item>
                    <Pagination.Item>
                        <Pagination.Link isActive>1</Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item>
                        <Pagination.Ellipsis />
                    </Pagination.Item>
                    <Pagination.Item>
                        <Pagination.Link>10</Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item>
                        <Pagination.Next>
                            <span>Next</span>
                            <Pagination.NextIcon />
                        </Pagination.Next>
                    </Pagination.Item>
                </Pagination.Content>
            </Pagination>

            <ButtonGroup>
                <Button>First</Button>
                <Button>
                    <ButtonGroup.Separator />
                    Second
                </Button>
                <Button>
                    <ButtonGroup.Separator />
                    Third
                </Button>
            </ButtonGroup>

            <Disclosure className="border rounded-lg p-4">
                <Disclosure.Heading>
                    <Disclosure.Trigger className="text-lg font-semibold">
                        Click to expand
                        <Disclosure.Indicator />
                    </Disclosure.Trigger>
                </Disclosure.Heading>
                <Disclosure.Content>
                    <Disclosure.Body className="mt-4 text-gray-600">
                        Hidden content
                    </Disclosure.Body>
                </Disclosure.Content>
            </Disclosure>

            <Card className="w-full items-stretch md:flex-row">
                <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]">
                    <img
                        alt="Cherries"
                        className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
                        loading="lazy"
                        src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/cherries.jpeg"
                    />
                </div>
                <div className="flex flex-1 flex-col gap-3">
                    <Card.Header className="gap-1">
                        <Card.Title className="pr-8">
                            Become an ACME Creator!
                        </Card.Title>
                        <Card.Description>
                            Lorem ipsum dolor sit amet consectetur. Sed arcu
                            donec id aliquam dolor sed amet faucibus etiam.
                        </Card.Description>
                        <CloseButton
                            aria-label="Close banner"
                            className="absolute top-3 right-3"
                        />
                    </Card.Header>
                    <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-foreground">
                                Only 10 spots
                            </span>
                            <span className="text-xs text-muted">
                                Submission ends Oct 10.
                            </span>
                        </div>
                        <Button className="w-full sm:w-auto">Apply Now</Button>
                    </Card.Footer>
                </div>
            </Card>

            <div className="flex w-full items-center justify-center">
                <div className="grid w-full max-w-3xl grid-cols-12 gap-4 p-4">
                    {/* Row 1: Large Product Card - Available Soon */}
                    <Card className="col-span-12 flex h-auto min-h-[152px] flex-col sm:flex-row">
                        <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]">
                            <img
                                alt="Cherries"
                                className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
                                loading="lazy"
                                src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/cherries.jpeg"
                            />
                        </div>
                        <div className="flex flex-1 flex-col gap-3">
                            <Card.Header className="gap-1">
                                <Card.Title className="pr-8">
                                    Become an ACME Creator!
                                </Card.Title>
                                <Card.Description>
                                    Lorem ipsum dolor sit amet consectetur. Sed
                                    arcu donec id aliquam dolor sed amet
                                    faucibus etiam.
                                </Card.Description>
                                <CloseButton
                                    aria-label="Close banner"
                                    className="absolute top-3 right-3"
                                />
                            </Card.Header>
                            <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium text-foreground">
                                        Only 10 spots
                                    </span>
                                    <span className="text-xs text-muted">
                                        Submission ends Oct 10.
                                    </span>
                                </div>
                                <Button className="w-full sm:w-auto">
                                    Apply Now
                                </Button>
                            </Card.Footer>
                        </div>
                    </Card>
                    {/* Row 2 */}
                    <div className="col-span-12 grid grid-cols-12 gap-4">
                        {/* Left Column */}
                        <div className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-6">
                            {/* Top Card */}
                            <Card className="col-span-12">
                                <div className="absolute top-3 right-3 z-10">
                                    <CloseButton aria-label="Close notification" />
                                </div>
                                <Card.Header className="gap-3">
                                    {/* <CircleDollar
                                        aria-label="Dollar sign icon"
                                        className="text-primary size-8 shrink-0"
                                        role="img"
                                    /> */}
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xs font-medium text-muted uppercase">
                                            PAYMENT
                                        </span>
                                        <Card.Title className="pr-8 text-sm sm:text-base">
                                            You can now withdraw on crypto
                                        </Card.Title>
                                        <Card.Description className="text-xs sm:text-sm">
                                            Add your wallet in settings to
                                            withdraw
                                        </Card.Description>
                                    </div>
                                </Card.Header>
                                <Card.Footer>
                                    <Link
                                        aria-label="Go to settings"
                                        href="#"
                                        rel="noopener noreferrer"
                                    >
                                        Go to settings
                                        <Link.Icon aria-hidden="true" />
                                    </Link>
                                </Card.Footer>
                            </Card>
                            {/* Bottom cards */}
                            <div className="col-span-12 grid grid-cols-12 gap-4">
                                {/* Left Card */}
                                <Card className="col-span-12 gap-2 sm:col-span-6">
                                    <Card.Header>
                                        <Avatar className="size-[56px] rounded-xl">
                                            <Avatar.Image
                                                alt="Demo 1"
                                                src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/demo1.jpg"
                                            />
                                            <Avatar.Fallback>
                                                JK
                                            </Avatar.Fallback>
                                        </Avatar>
                                    </Card.Header>
                                    <Card.Content className="mt-1">
                                        <p className="text-sm leading-4 font-medium">
                                            Indie Hackers
                                        </p>
                                        <p className="text-xs text-muted">
                                            148 members
                                        </p>
                                    </Card.Content>
                                    <Card.Footer className="flex items-center gap-2">
                                        <Avatar className="size-4">
                                            <Avatar.Image
                                                alt="John"
                                                src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/red.jpg"
                                            />
                                            <Avatar.Fallback>
                                                JK
                                            </Avatar.Fallback>
                                        </Avatar>
                                        <p className="text-xs text-muted">
                                            By John
                                        </p>
                                    </Card.Footer>
                                </Card>
                                {/* Right Card */}
                                <Card className="col-span-12 gap-2 sm:col-span-6">
                                    <Card.Header>
                                        <Avatar className="size-[56px] rounded-xl">
                                            <Avatar.Image
                                                alt="Demo 2"
                                                src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/demo2.jpg"
                                            />
                                            <Avatar.Fallback>
                                                AB
                                            </Avatar.Fallback>
                                        </Avatar>
                                    </Card.Header>
                                    <Card.Content className="mt-1">
                                        <p className="text-sm leading-4 font-medium">
                                            AI Builders
                                        </p>
                                        <p className="text-xs text-muted">
                                            362 members
                                        </p>
                                    </Card.Content>
                                    <Card.Footer className="flex items-center gap-2">
                                        <Avatar className="size-4">
                                            <Avatar.Image
                                                alt="John"
                                                src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg"
                                            />
                                            <Avatar.Fallback>M</Avatar.Fallback>
                                        </Avatar>
                                        <p className="text-xs text-muted">
                                            By Martha
                                        </p>
                                    </Card.Footer>
                                </Card>
                            </div>
                        </div>
                        {/* Right Column */}
                        <Card className="col-span-12 min-h-[200px] overflow-hidden rounded-3xl lg:col-span-6">
                            {/* Background image */}
                            <img
                                alt="NEO Home Robot"
                                aria-hidden="true"
                                className="absolute inset-0 h-full w-full object-cover"
                                src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/neo2.jpeg"
                            />
                            {/* Header */}
                            <Card.Header className="z-10 text-white">
                                <Card.Title className="text-xs font-semibold tracking-wide text-black/70">
                                    NEO
                                </Card.Title>
                                <Card.Description className="text-sm leading-5 font-medium text-black/50">
                                    Home Robot
                                </Card.Description>
                            </Card.Header>
                            {/* Footer */}
                            <Card.Footer className="z-10 mt-auto flex items-center justify-between">
                                <div>
                                    <div className="text-sm font-medium text-black">
                                        Available soon
                                    </div>
                                    <div className="text-xs text-black/60">
                                        Get notified
                                    </div>
                                </div>
                                <Button
                                    className="bg-white text-black"
                                    size="sm"
                                    variant="tertiary"
                                >
                                    Notify me
                                </Button>
                            </Card.Footer>
                        </Card>
                    </div>
                    {/* Row 3 */}
                    <div className="col-span-12 grid grid-cols-12 gap-4">
                        {/* Left Column: Card */}
                        <Card className="relative col-span-12 h-[250px] sm:h-[300px] md:col-span-8 md:h-[350px]">
                            <img
                                alt="NEO Home Robot"
                                aria-hidden="true"
                                className="absolute inset-0 h-full w-full object-cover"
                                src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/neo1.jpeg"
                            />
                            <Card.Footer className="z-10 mt-auto flex items-end justify-between">
                                <div>
                                    <div className="text-base font-medium text-black sm:text-lg">
                                        NEO
                                    </div>
                                    <div className="text-xs font-medium text-black/50 sm:text-sm">
                                        $499/m
                                    </div>
                                </div>
                                <Button
                                    className="bg-white text-black"
                                    size="sm"
                                    variant="tertiary"
                                >
                                    Get now
                                </Button>
                            </Card.Footer>
                        </Card>
                        {/* Right Column: Cards Stack */}
                        <div className="col-span-12 flex flex-col gap-2 md:col-span-4 md:justify-between md:gap-0 md:py-2">
                            {/* 1 */}
                            <Card
                                className="flex flex-row gap-3 p-1"
                                variant="transparent"
                            >
                                <img
                                    alt="Futuristic Robot"
                                    className="aspect-square h-16 w-16 shrink-0 rounded-xl object-cover select-none sm:h-20 sm:w-20"
                                    loading="lazy"
                                    src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/robot1.jpeg"
                                />
                                <div className="flex flex-1 flex-col justify-center gap-1">
                                    <Card.Title className="text-sm">
                                        Bridging the Future
                                    </Card.Title>
                                    <Card.Description className="text-xs">
                                        Today, 6:30 PM
                                    </Card.Description>
                                </div>
                            </Card>
                            {/* 2 */}
                            <Card
                                className="flex flex-row gap-3 p-1"
                                variant="transparent"
                            >
                                <img
                                    alt="Avocado"
                                    className="aspect-square h-16 w-16 shrink-0 rounded-xl object-cover select-none sm:h-20 sm:w-20"
                                    loading="lazy"
                                    src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/avocado.jpeg"
                                />
                                <div className="flex flex-1 flex-col justify-center gap-1">
                                    <Card.Title className="text-sm">
                                        Avocado Hackathon
                                    </Card.Title>
                                    <Card.Description className="text-xs">
                                        Wed, 4:30 PM
                                    </Card.Description>
                                </div>
                            </Card>
                            {/* 3 */}
                            <Card
                                className="flex flex-row gap-3 p-1"
                                variant="transparent"
                            >
                                <img
                                    alt="Sound Electro event"
                                    className="aspect-square h-16 w-16 shrink-0 rounded-xl object-cover select-none sm:h-20 sm:w-20"
                                    loading="lazy"
                                    src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/oranges.jpeg"
                                />
                                <div className="flex flex-1 flex-col justify-center gap-1">
                                    <Card.Title className="text-sm">
                                        Sound Electro | Beyond art
                                    </Card.Title>
                                    <Card.Description className="text-xs">
                                        Fri, 8:00 PM
                                    </Card.Description>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

            <Form
                className="flex w-96 flex-col gap-4"
                render={(props) => <form {...props} data-custom="foo" />}
                onSubmit={onSubmit}
            >
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                value,
                            )
                        ) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }
                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    <Description>
                        Must be at least 8 characters with 1 uppercase and 1
                        number
                    </Description>
                    <FieldError />
                </TextField>
                <div className="flex gap-2">
                    <Button type="submit">
                        {/* <Check /> */}
                        Submit
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
            </Form>

            <div className="size-20 items-center justify-center flex border-2 active:scale-90 transition select-none">
                Hwllo
            </div>
        </div>
    );
}
