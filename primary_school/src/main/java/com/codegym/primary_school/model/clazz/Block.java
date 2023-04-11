package com.c0822g1primaryschoolbe.entity.clazz;

import javax.persistence.*;

@Entity
public class Block {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "block_id")
    private Long blockId;
    @Column(columnDefinition = "varchar(45)")
    private Integer blockName;

    public Long getBlockId() {
        return blockId;
    }

    public void setBlockId(Long blockId) {
        this.blockId = blockId;
    }

    public Integer getBlockName() {
        return blockName;
    }

    public void setBlockName(Integer blockName) {
        this.blockName = blockName;
    }
}
