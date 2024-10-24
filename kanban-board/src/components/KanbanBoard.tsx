import { useMemo, useState } from 'react'
import PlusIcon from '../icons/PlusIcon'
import { Column, Id } from '../types';
import ColumnContainer from './ColumnContainer';
import { DndContext, DragOverlay, DragStartEvent } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';
import { createPortal } from 'react-dom';

function KanbanBoard() {

    const [columns, setColumns] = useState<Column[]>([]);
    const columnsId = useMemo(() => columns.map((col) => col.id), [columns])
    console.log(columns)

    const [activeColumn, setActiveColumn] = useState<Column | null>(null)


    function createNewColumn() {
        const columnToAdd: Column = {
            id: generateId(),
            title: `Column ${columns.length + 1}`
        }

        setColumns([...columns, columnToAdd])
    }

    function generateId() {
        // Generate a random number between 0 and 10000
        return Math.floor(Math.random() * 10001)
    }

    function deleteColumn(id: Id) {
        const filteredColumns = columns.filter((col) => col.id !== id)
        setColumns(filteredColumns)
    }

    function onDragStart(event: DragStartEvent) {
        if (event.active.data.current?.type === "Column") {
            setActiveColumn(event.active.data.current.column);
            return
        }
    }
    return (
        <div
            className='
            m-auto
            flex
            min-h-screen
            w-full
            items-center
            overflow-x-auto
            overflow-y-hidden
            px-[40px]
            '>
            <DndContext onDragStart={onDragStart}>
                <div className='m-auto flex gap-4'>
                    <div className='flex gap-4'>
                        <SortableContext items={columnsId}>
                            {columns.map((col, index) => (
                                <ColumnContainer key={index} column={col} deleteColumn={deleteColumn} />
                            ))}
                        </SortableContext>
                    </div>
                    <button
                        onClick={() => { createNewColumn(); }}
                        className='
                h-[60px]
                w-[350px]
                min-w-[350px]
                cursor-pointer
                rounded-lg
                bg-mainBackgroundColor
                border-2
                border-columnBackgroundColor
                p-4
                ring-rose-500
                hover:ring-2
                flex
                gap-2
                '>
                        <PlusIcon />
                        Add Column
                    </button>
                </div>

                {
                    createPortal(<DragOverlay>
                        {activeColumn &&
                            (<ColumnContainer
                                column={activeColumn}
                                deleteColumn={deleteColumn} />)
                        }
                    </DragOverlay>,
                        document.body
                    )
                }
            </DndContext>
        </div >

    )
}

export default KanbanBoard