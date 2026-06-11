import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model OrdersProduct
 *
 */
export type OrdersProductModel = runtime.Types.Result.DefaultSelection<Prisma.$OrdersProductPayload>;
export type AggregateOrdersProduct = {
    _count: OrdersProductCountAggregateOutputType | null;
    _avg: OrdersProductAvgAggregateOutputType | null;
    _sum: OrdersProductSumAggregateOutputType | null;
    _min: OrdersProductMinAggregateOutputType | null;
    _max: OrdersProductMaxAggregateOutputType | null;
};
export type OrdersProductAvgAggregateOutputType = {
    quantity: number | null;
    total: runtime.Decimal | null;
};
export type OrdersProductSumAggregateOutputType = {
    quantity: number | null;
    total: runtime.Decimal | null;
};
export type OrdersProductMinAggregateOutputType = {
    product_id: string | null;
    order_id: string | null;
    quantity: number | null;
    total: runtime.Decimal | null;
};
export type OrdersProductMaxAggregateOutputType = {
    product_id: string | null;
    order_id: string | null;
    quantity: number | null;
    total: runtime.Decimal | null;
};
export type OrdersProductCountAggregateOutputType = {
    product_id: number;
    order_id: number;
    quantity: number;
    total: number;
    _all: number;
};
export type OrdersProductAvgAggregateInputType = {
    quantity?: true;
    total?: true;
};
export type OrdersProductSumAggregateInputType = {
    quantity?: true;
    total?: true;
};
export type OrdersProductMinAggregateInputType = {
    product_id?: true;
    order_id?: true;
    quantity?: true;
    total?: true;
};
export type OrdersProductMaxAggregateInputType = {
    product_id?: true;
    order_id?: true;
    quantity?: true;
    total?: true;
};
export type OrdersProductCountAggregateInputType = {
    product_id?: true;
    order_id?: true;
    quantity?: true;
    total?: true;
    _all?: true;
};
export type OrdersProductAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which OrdersProduct to aggregate.
     */
    where?: Prisma.OrdersProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrdersProducts to fetch.
     */
    orderBy?: Prisma.OrdersProductOrderByWithRelationInput | Prisma.OrdersProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.OrdersProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrdersProducts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrdersProducts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned OrdersProducts
    **/
    _count?: true | OrdersProductCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: OrdersProductAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: OrdersProductSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: OrdersProductMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: OrdersProductMaxAggregateInputType;
};
export type GetOrdersProductAggregateType<T extends OrdersProductAggregateArgs> = {
    [P in keyof T & keyof AggregateOrdersProduct]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrdersProduct[P]> : Prisma.GetScalarType<T[P], AggregateOrdersProduct[P]>;
};
export type OrdersProductGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrdersProductWhereInput;
    orderBy?: Prisma.OrdersProductOrderByWithAggregationInput | Prisma.OrdersProductOrderByWithAggregationInput[];
    by: Prisma.OrdersProductScalarFieldEnum[] | Prisma.OrdersProductScalarFieldEnum;
    having?: Prisma.OrdersProductScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrdersProductCountAggregateInputType | true;
    _avg?: OrdersProductAvgAggregateInputType;
    _sum?: OrdersProductSumAggregateInputType;
    _min?: OrdersProductMinAggregateInputType;
    _max?: OrdersProductMaxAggregateInputType;
};
export type OrdersProductGroupByOutputType = {
    product_id: string;
    order_id: string;
    quantity: number;
    total: runtime.Decimal;
    _count: OrdersProductCountAggregateOutputType | null;
    _avg: OrdersProductAvgAggregateOutputType | null;
    _sum: OrdersProductSumAggregateOutputType | null;
    _min: OrdersProductMinAggregateOutputType | null;
    _max: OrdersProductMaxAggregateOutputType | null;
};
type GetOrdersProductGroupByPayload<T extends OrdersProductGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrdersProductGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrdersProductGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrdersProductGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrdersProductGroupByOutputType[P]>;
}>>;
export type OrdersProductWhereInput = {
    AND?: Prisma.OrdersProductWhereInput | Prisma.OrdersProductWhereInput[];
    OR?: Prisma.OrdersProductWhereInput[];
    NOT?: Prisma.OrdersProductWhereInput | Prisma.OrdersProductWhereInput[];
    product_id?: Prisma.StringFilter<"OrdersProduct"> | string;
    order_id?: Prisma.StringFilter<"OrdersProduct"> | string;
    quantity?: Prisma.IntFilter<"OrdersProduct"> | number;
    total?: Prisma.DecimalFilter<"OrdersProduct"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: Prisma.XOR<Prisma.OrdersScalarRelationFilter, Prisma.OrdersWhereInput>;
    product?: Prisma.XOR<Prisma.ProductsScalarRelationFilter, Prisma.ProductsWhereInput>;
};
export type OrdersProductOrderByWithRelationInput = {
    product_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    order?: Prisma.OrdersOrderByWithRelationInput;
    product?: Prisma.ProductsOrderByWithRelationInput;
};
export type OrdersProductWhereUniqueInput = Prisma.AtLeast<{
    product_id_order_id?: Prisma.OrdersProductProduct_idOrder_idCompoundUniqueInput;
    AND?: Prisma.OrdersProductWhereInput | Prisma.OrdersProductWhereInput[];
    OR?: Prisma.OrdersProductWhereInput[];
    NOT?: Prisma.OrdersProductWhereInput | Prisma.OrdersProductWhereInput[];
    product_id?: Prisma.StringFilter<"OrdersProduct"> | string;
    order_id?: Prisma.StringFilter<"OrdersProduct"> | string;
    quantity?: Prisma.IntFilter<"OrdersProduct"> | number;
    total?: Prisma.DecimalFilter<"OrdersProduct"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: Prisma.XOR<Prisma.OrdersScalarRelationFilter, Prisma.OrdersWhereInput>;
    product?: Prisma.XOR<Prisma.ProductsScalarRelationFilter, Prisma.ProductsWhereInput>;
}, "product_id_order_id">;
export type OrdersProductOrderByWithAggregationInput = {
    product_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    _count?: Prisma.OrdersProductCountOrderByAggregateInput;
    _avg?: Prisma.OrdersProductAvgOrderByAggregateInput;
    _max?: Prisma.OrdersProductMaxOrderByAggregateInput;
    _min?: Prisma.OrdersProductMinOrderByAggregateInput;
    _sum?: Prisma.OrdersProductSumOrderByAggregateInput;
};
export type OrdersProductScalarWhereWithAggregatesInput = {
    AND?: Prisma.OrdersProductScalarWhereWithAggregatesInput | Prisma.OrdersProductScalarWhereWithAggregatesInput[];
    OR?: Prisma.OrdersProductScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OrdersProductScalarWhereWithAggregatesInput | Prisma.OrdersProductScalarWhereWithAggregatesInput[];
    product_id?: Prisma.StringWithAggregatesFilter<"OrdersProduct"> | string;
    order_id?: Prisma.StringWithAggregatesFilter<"OrdersProduct"> | string;
    quantity?: Prisma.IntWithAggregatesFilter<"OrdersProduct"> | number;
    total?: Prisma.DecimalWithAggregatesFilter<"OrdersProduct"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type OrdersProductCreateInput = {
    quantity: number;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    order: Prisma.OrdersCreateNestedOneWithoutProductsInput;
    product: Prisma.ProductsCreateNestedOneWithoutOrdersInput;
};
export type OrdersProductUncheckedCreateInput = {
    product_id: string;
    order_id: string;
    quantity: number;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type OrdersProductUpdateInput = {
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: Prisma.OrdersUpdateOneRequiredWithoutProductsNestedInput;
    product?: Prisma.ProductsUpdateOneRequiredWithoutOrdersNestedInput;
};
export type OrdersProductUncheckedUpdateInput = {
    product_id?: Prisma.StringFieldUpdateOperationsInput | string;
    order_id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type OrdersProductCreateManyInput = {
    product_id: string;
    order_id: string;
    quantity: number;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type OrdersProductUpdateManyMutationInput = {
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type OrdersProductUncheckedUpdateManyInput = {
    product_id?: Prisma.StringFieldUpdateOperationsInput | string;
    order_id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type OrdersProductListRelationFilter = {
    every?: Prisma.OrdersProductWhereInput;
    some?: Prisma.OrdersProductWhereInput;
    none?: Prisma.OrdersProductWhereInput;
};
export type OrdersProductOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OrdersProductProduct_idOrder_idCompoundUniqueInput = {
    product_id: string;
    order_id: string;
};
export type OrdersProductCountOrderByAggregateInput = {
    product_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type OrdersProductAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type OrdersProductMaxOrderByAggregateInput = {
    product_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type OrdersProductMinOrderByAggregateInput = {
    product_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type OrdersProductSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type OrdersProductCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.OrdersProductCreateWithoutProductInput, Prisma.OrdersProductUncheckedCreateWithoutProductInput> | Prisma.OrdersProductCreateWithoutProductInput[] | Prisma.OrdersProductUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.OrdersProductCreateOrConnectWithoutProductInput | Prisma.OrdersProductCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.OrdersProductCreateManyProductInputEnvelope;
    connect?: Prisma.OrdersProductWhereUniqueInput | Prisma.OrdersProductWhereUniqueInput[];
};
export type OrdersProductUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.OrdersProductCreateWithoutProductInput, Prisma.OrdersProductUncheckedCreateWithoutProductInput> | Prisma.OrdersProductCreateWithoutProductInput[] | Prisma.OrdersProductUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.OrdersProductCreateOrConnectWithoutProductInput | Prisma.OrdersProductCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.OrdersProductCreateManyProductInputEnvelope;
    connect?: Prisma.OrdersProductWhereUniqueInput | Prisma.OrdersProductWhereUniqueInput[];
};
export type OrdersProductUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.OrdersProductCreateWithoutProductInput, Prisma.OrdersProductUncheckedCreateWithoutProductInput> | Prisma.OrdersProductCreateWithoutProductInput[] | Prisma.OrdersProductUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.OrdersProductCreateOrConnectWithoutProductInput | Prisma.OrdersProductCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.OrdersProductUpsertWithWhereUniqueWithoutProductInput | Prisma.OrdersProductUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.OrdersProductCreateManyProductInputEnvelope;
    set?: Prisma.OrdersProductWhereUniqueInput | Prisma.OrdersProductWhereUniqueInput[];
    disconnect?: Prisma.OrdersProductWhereUniqueInput | Prisma.OrdersProductWhereUniqueInput[];
    delete?: Prisma.OrdersProductWhereUniqueInput | Prisma.OrdersProductWhereUniqueInput[];
    connect?: Prisma.OrdersProductWhereUniqueInput | Prisma.OrdersProductWhereUniqueInput[];
    update?: Prisma.OrdersProductUpdateWithWhereUniqueWithoutProductInput | Prisma.OrdersProductUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.OrdersProductUpdateManyWithWhereWithoutProductInput | Prisma.OrdersProductUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.OrdersProductScalarWhereInput | Prisma.OrdersProductScalarWhereInput[];
};
export type OrdersProductUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.OrdersProductCreateWithoutProductInput, Prisma.OrdersProductUncheckedCreateWithoutProductInput> | Prisma.OrdersProductCreateWithoutProductInput[] | Prisma.OrdersProductUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.OrdersProductCreateOrConnectWithoutProductInput | Prisma.OrdersProductCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.OrdersProductUpsertWithWhereUniqueWithoutProductInput | Prisma.OrdersProductUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.OrdersProductCreateManyProductInputEnvelope;
    set?: Prisma.OrdersProductWhereUniqueInput | Prisma.OrdersProductWhereUniqueInput[];
    disconnect?: Prisma.OrdersProductWhereUniqueInput | Prisma.OrdersProductWhereUniqueInput[];
    delete?: Prisma.OrdersProductWhereUniqueInput | Prisma.OrdersProductWhereUniqueInput[];
    connect?: Prisma.OrdersProductWhereUniqueInput | Prisma.OrdersProductWhereUniqueInput[];
    update?: Prisma.OrdersProductUpdateWithWhereUniqueWithoutProductInput | Prisma.OrdersProductUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.OrdersProductUpdateManyWithWhereWithoutProductInput | Prisma.OrdersProductUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.OrdersProductScalarWhereInput | Prisma.OrdersProductScalarWhereInput[];
};
export type OrdersProductCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.OrdersProductCreateWithoutOrderInput, Prisma.OrdersProductUncheckedCreateWithoutOrderInput> | Prisma.OrdersProductCreateWithoutOrderInput[] | Prisma.OrdersProductUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.OrdersProductCreateOrConnectWithoutOrderInput | Prisma.OrdersProductCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.OrdersProductCreateManyOrderInputEnvelope;
    connect?: Prisma.OrdersProductWhereUniqueInput | Prisma.OrdersProductWhereUniqueInput[];
};
export type OrdersProductUncheckedCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.OrdersProductCreateWithoutOrderInput, Prisma.OrdersProductUncheckedCreateWithoutOrderInput> | Prisma.OrdersProductCreateWithoutOrderInput[] | Prisma.OrdersProductUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.OrdersProductCreateOrConnectWithoutOrderInput | Prisma.OrdersProductCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.OrdersProductCreateManyOrderInputEnvelope;
    connect?: Prisma.OrdersProductWhereUniqueInput | Prisma.OrdersProductWhereUniqueInput[];
};
export type OrdersProductUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.OrdersProductCreateWithoutOrderInput, Prisma.OrdersProductUncheckedCreateWithoutOrderInput> | Prisma.OrdersProductCreateWithoutOrderInput[] | Prisma.OrdersProductUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.OrdersProductCreateOrConnectWithoutOrderInput | Prisma.OrdersProductCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.OrdersProductUpsertWithWhereUniqueWithoutOrderInput | Prisma.OrdersProductUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.OrdersProductCreateManyOrderInputEnvelope;
    set?: Prisma.OrdersProductWhereUniqueInput | Prisma.OrdersProductWhereUniqueInput[];
    disconnect?: Prisma.OrdersProductWhereUniqueInput | Prisma.OrdersProductWhereUniqueInput[];
    delete?: Prisma.OrdersProductWhereUniqueInput | Prisma.OrdersProductWhereUniqueInput[];
    connect?: Prisma.OrdersProductWhereUniqueInput | Prisma.OrdersProductWhereUniqueInput[];
    update?: Prisma.OrdersProductUpdateWithWhereUniqueWithoutOrderInput | Prisma.OrdersProductUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.OrdersProductUpdateManyWithWhereWithoutOrderInput | Prisma.OrdersProductUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.OrdersProductScalarWhereInput | Prisma.OrdersProductScalarWhereInput[];
};
export type OrdersProductUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.OrdersProductCreateWithoutOrderInput, Prisma.OrdersProductUncheckedCreateWithoutOrderInput> | Prisma.OrdersProductCreateWithoutOrderInput[] | Prisma.OrdersProductUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.OrdersProductCreateOrConnectWithoutOrderInput | Prisma.OrdersProductCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.OrdersProductUpsertWithWhereUniqueWithoutOrderInput | Prisma.OrdersProductUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.OrdersProductCreateManyOrderInputEnvelope;
    set?: Prisma.OrdersProductWhereUniqueInput | Prisma.OrdersProductWhereUniqueInput[];
    disconnect?: Prisma.OrdersProductWhereUniqueInput | Prisma.OrdersProductWhereUniqueInput[];
    delete?: Prisma.OrdersProductWhereUniqueInput | Prisma.OrdersProductWhereUniqueInput[];
    connect?: Prisma.OrdersProductWhereUniqueInput | Prisma.OrdersProductWhereUniqueInput[];
    update?: Prisma.OrdersProductUpdateWithWhereUniqueWithoutOrderInput | Prisma.OrdersProductUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.OrdersProductUpdateManyWithWhereWithoutOrderInput | Prisma.OrdersProductUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.OrdersProductScalarWhereInput | Prisma.OrdersProductScalarWhereInput[];
};
export type OrdersProductCreateWithoutProductInput = {
    quantity: number;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    order: Prisma.OrdersCreateNestedOneWithoutProductsInput;
};
export type OrdersProductUncheckedCreateWithoutProductInput = {
    order_id: string;
    quantity: number;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type OrdersProductCreateOrConnectWithoutProductInput = {
    where: Prisma.OrdersProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrdersProductCreateWithoutProductInput, Prisma.OrdersProductUncheckedCreateWithoutProductInput>;
};
export type OrdersProductCreateManyProductInputEnvelope = {
    data: Prisma.OrdersProductCreateManyProductInput | Prisma.OrdersProductCreateManyProductInput[];
};
export type OrdersProductUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.OrdersProductWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrdersProductUpdateWithoutProductInput, Prisma.OrdersProductUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.OrdersProductCreateWithoutProductInput, Prisma.OrdersProductUncheckedCreateWithoutProductInput>;
};
export type OrdersProductUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.OrdersProductWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrdersProductUpdateWithoutProductInput, Prisma.OrdersProductUncheckedUpdateWithoutProductInput>;
};
export type OrdersProductUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.OrdersProductScalarWhereInput;
    data: Prisma.XOR<Prisma.OrdersProductUpdateManyMutationInput, Prisma.OrdersProductUncheckedUpdateManyWithoutProductInput>;
};
export type OrdersProductScalarWhereInput = {
    AND?: Prisma.OrdersProductScalarWhereInput | Prisma.OrdersProductScalarWhereInput[];
    OR?: Prisma.OrdersProductScalarWhereInput[];
    NOT?: Prisma.OrdersProductScalarWhereInput | Prisma.OrdersProductScalarWhereInput[];
    product_id?: Prisma.StringFilter<"OrdersProduct"> | string;
    order_id?: Prisma.StringFilter<"OrdersProduct"> | string;
    quantity?: Prisma.IntFilter<"OrdersProduct"> | number;
    total?: Prisma.DecimalFilter<"OrdersProduct"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type OrdersProductCreateWithoutOrderInput = {
    quantity: number;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    product: Prisma.ProductsCreateNestedOneWithoutOrdersInput;
};
export type OrdersProductUncheckedCreateWithoutOrderInput = {
    product_id: string;
    quantity: number;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type OrdersProductCreateOrConnectWithoutOrderInput = {
    where: Prisma.OrdersProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrdersProductCreateWithoutOrderInput, Prisma.OrdersProductUncheckedCreateWithoutOrderInput>;
};
export type OrdersProductCreateManyOrderInputEnvelope = {
    data: Prisma.OrdersProductCreateManyOrderInput | Prisma.OrdersProductCreateManyOrderInput[];
};
export type OrdersProductUpsertWithWhereUniqueWithoutOrderInput = {
    where: Prisma.OrdersProductWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrdersProductUpdateWithoutOrderInput, Prisma.OrdersProductUncheckedUpdateWithoutOrderInput>;
    create: Prisma.XOR<Prisma.OrdersProductCreateWithoutOrderInput, Prisma.OrdersProductUncheckedCreateWithoutOrderInput>;
};
export type OrdersProductUpdateWithWhereUniqueWithoutOrderInput = {
    where: Prisma.OrdersProductWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrdersProductUpdateWithoutOrderInput, Prisma.OrdersProductUncheckedUpdateWithoutOrderInput>;
};
export type OrdersProductUpdateManyWithWhereWithoutOrderInput = {
    where: Prisma.OrdersProductScalarWhereInput;
    data: Prisma.XOR<Prisma.OrdersProductUpdateManyMutationInput, Prisma.OrdersProductUncheckedUpdateManyWithoutOrderInput>;
};
export type OrdersProductCreateManyProductInput = {
    order_id: string;
    quantity: number;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type OrdersProductUpdateWithoutProductInput = {
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: Prisma.OrdersUpdateOneRequiredWithoutProductsNestedInput;
};
export type OrdersProductUncheckedUpdateWithoutProductInput = {
    order_id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type OrdersProductUncheckedUpdateManyWithoutProductInput = {
    order_id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type OrdersProductCreateManyOrderInput = {
    product_id: string;
    quantity: number;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type OrdersProductUpdateWithoutOrderInput = {
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    product?: Prisma.ProductsUpdateOneRequiredWithoutOrdersNestedInput;
};
export type OrdersProductUncheckedUpdateWithoutOrderInput = {
    product_id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type OrdersProductUncheckedUpdateManyWithoutOrderInput = {
    product_id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type OrdersProductSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    product_id?: boolean;
    order_id?: boolean;
    quantity?: boolean;
    total?: boolean;
    order?: boolean | Prisma.OrdersDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ordersProduct"]>;
export type OrdersProductSelectScalar = {
    product_id?: boolean;
    order_id?: boolean;
    quantity?: boolean;
    total?: boolean;
};
export type OrdersProductOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"product_id" | "order_id" | "quantity" | "total", ExtArgs["result"]["ordersProduct"]>;
export type OrdersProductInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrdersDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
};
export type $OrdersProductPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "OrdersProduct";
    objects: {
        order: Prisma.$OrdersPayload<ExtArgs>;
        product: Prisma.$ProductsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        product_id: string;
        order_id: string;
        quantity: number;
        total: runtime.Decimal;
    }, ExtArgs["result"]["ordersProduct"]>;
    composites: {};
};
export type OrdersProductGetPayload<S extends boolean | null | undefined | OrdersProductDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OrdersProductPayload, S>;
export type OrdersProductCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OrdersProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrdersProductCountAggregateInputType | true;
};
export interface OrdersProductDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['OrdersProduct'];
        meta: {
            name: 'OrdersProduct';
        };
    };
    /**
     * Find zero or one OrdersProduct that matches the filter.
     * @param {OrdersProductFindUniqueArgs} args - Arguments to find a OrdersProduct
     * @example
     * // Get one OrdersProduct
     * const ordersProduct = await prisma.ordersProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdersProductFindUniqueArgs>(args: Prisma.SelectSubset<T, OrdersProductFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OrdersProductClient<runtime.Types.Result.GetResult<Prisma.$OrdersProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one OrdersProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrdersProductFindUniqueOrThrowArgs} args - Arguments to find a OrdersProduct
     * @example
     * // Get one OrdersProduct
     * const ordersProduct = await prisma.ordersProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdersProductFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OrdersProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrdersProductClient<runtime.Types.Result.GetResult<Prisma.$OrdersProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first OrdersProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersProductFindFirstArgs} args - Arguments to find a OrdersProduct
     * @example
     * // Get one OrdersProduct
     * const ordersProduct = await prisma.ordersProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdersProductFindFirstArgs>(args?: Prisma.SelectSubset<T, OrdersProductFindFirstArgs<ExtArgs>>): Prisma.Prisma__OrdersProductClient<runtime.Types.Result.GetResult<Prisma.$OrdersProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first OrdersProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersProductFindFirstOrThrowArgs} args - Arguments to find a OrdersProduct
     * @example
     * // Get one OrdersProduct
     * const ordersProduct = await prisma.ordersProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdersProductFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OrdersProductFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrdersProductClient<runtime.Types.Result.GetResult<Prisma.$OrdersProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more OrdersProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrdersProducts
     * const ordersProducts = await prisma.ordersProduct.findMany()
     *
     * // Get first 10 OrdersProducts
     * const ordersProducts = await prisma.ordersProduct.findMany({ take: 10 })
     *
     * // Only select the `product_id`
     * const ordersProductWithProduct_idOnly = await prisma.ordersProduct.findMany({ select: { product_id: true } })
     *
     */
    findMany<T extends OrdersProductFindManyArgs>(args?: Prisma.SelectSubset<T, OrdersProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrdersProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a OrdersProduct.
     * @param {OrdersProductCreateArgs} args - Arguments to create a OrdersProduct.
     * @example
     * // Create one OrdersProduct
     * const OrdersProduct = await prisma.ordersProduct.create({
     *   data: {
     *     // ... data to create a OrdersProduct
     *   }
     * })
     *
     */
    create<T extends OrdersProductCreateArgs>(args: Prisma.SelectSubset<T, OrdersProductCreateArgs<ExtArgs>>): Prisma.Prisma__OrdersProductClient<runtime.Types.Result.GetResult<Prisma.$OrdersProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many OrdersProducts.
     * @param {OrdersProductCreateManyArgs} args - Arguments to create many OrdersProducts.
     * @example
     * // Create many OrdersProducts
     * const ordersProduct = await prisma.ordersProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends OrdersProductCreateManyArgs>(args?: Prisma.SelectSubset<T, OrdersProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a OrdersProduct.
     * @param {OrdersProductDeleteArgs} args - Arguments to delete one OrdersProduct.
     * @example
     * // Delete one OrdersProduct
     * const OrdersProduct = await prisma.ordersProduct.delete({
     *   where: {
     *     // ... filter to delete one OrdersProduct
     *   }
     * })
     *
     */
    delete<T extends OrdersProductDeleteArgs>(args: Prisma.SelectSubset<T, OrdersProductDeleteArgs<ExtArgs>>): Prisma.Prisma__OrdersProductClient<runtime.Types.Result.GetResult<Prisma.$OrdersProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one OrdersProduct.
     * @param {OrdersProductUpdateArgs} args - Arguments to update one OrdersProduct.
     * @example
     * // Update one OrdersProduct
     * const ordersProduct = await prisma.ordersProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends OrdersProductUpdateArgs>(args: Prisma.SelectSubset<T, OrdersProductUpdateArgs<ExtArgs>>): Prisma.Prisma__OrdersProductClient<runtime.Types.Result.GetResult<Prisma.$OrdersProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more OrdersProducts.
     * @param {OrdersProductDeleteManyArgs} args - Arguments to filter OrdersProducts to delete.
     * @example
     * // Delete a few OrdersProducts
     * const { count } = await prisma.ordersProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends OrdersProductDeleteManyArgs>(args?: Prisma.SelectSubset<T, OrdersProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more OrdersProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrdersProducts
     * const ordersProduct = await prisma.ordersProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends OrdersProductUpdateManyArgs>(args: Prisma.SelectSubset<T, OrdersProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one OrdersProduct.
     * @param {OrdersProductUpsertArgs} args - Arguments to update or create a OrdersProduct.
     * @example
     * // Update or create a OrdersProduct
     * const ordersProduct = await prisma.ordersProduct.upsert({
     *   create: {
     *     // ... data to create a OrdersProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrdersProduct we want to update
     *   }
     * })
     */
    upsert<T extends OrdersProductUpsertArgs>(args: Prisma.SelectSubset<T, OrdersProductUpsertArgs<ExtArgs>>): Prisma.Prisma__OrdersProductClient<runtime.Types.Result.GetResult<Prisma.$OrdersProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of OrdersProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersProductCountArgs} args - Arguments to filter OrdersProducts to count.
     * @example
     * // Count the number of OrdersProducts
     * const count = await prisma.ordersProduct.count({
     *   where: {
     *     // ... the filter for the OrdersProducts we want to count
     *   }
     * })
    **/
    count<T extends OrdersProductCountArgs>(args?: Prisma.Subset<T, OrdersProductCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrdersProductCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a OrdersProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrdersProductAggregateArgs>(args: Prisma.Subset<T, OrdersProductAggregateArgs>): Prisma.PrismaPromise<GetOrdersProductAggregateType<T>>;
    /**
     * Group by OrdersProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends OrdersProductGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OrdersProductGroupByArgs['orderBy'];
    } : {
        orderBy?: OrdersProductGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OrdersProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the OrdersProduct model
     */
    readonly fields: OrdersProductFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for OrdersProduct.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__OrdersProductClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    order<T extends Prisma.OrdersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrdersDefaultArgs<ExtArgs>>): Prisma.Prisma__OrdersClient<runtime.Types.Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    product<T extends Prisma.ProductsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductsDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductsClient<runtime.Types.Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the OrdersProduct model
 */
export interface OrdersProductFieldRefs {
    readonly product_id: Prisma.FieldRef<"OrdersProduct", 'String'>;
    readonly order_id: Prisma.FieldRef<"OrdersProduct", 'String'>;
    readonly quantity: Prisma.FieldRef<"OrdersProduct", 'Int'>;
    readonly total: Prisma.FieldRef<"OrdersProduct", 'Decimal'>;
}
/**
 * OrdersProduct findUnique
 */
export type OrdersProductFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersProduct
     */
    select?: Prisma.OrdersProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrdersProduct
     */
    omit?: Prisma.OrdersProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrdersProductInclude<ExtArgs> | null;
    /**
     * Filter, which OrdersProduct to fetch.
     */
    where: Prisma.OrdersProductWhereUniqueInput;
};
/**
 * OrdersProduct findUniqueOrThrow
 */
export type OrdersProductFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersProduct
     */
    select?: Prisma.OrdersProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrdersProduct
     */
    omit?: Prisma.OrdersProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrdersProductInclude<ExtArgs> | null;
    /**
     * Filter, which OrdersProduct to fetch.
     */
    where: Prisma.OrdersProductWhereUniqueInput;
};
/**
 * OrdersProduct findFirst
 */
export type OrdersProductFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersProduct
     */
    select?: Prisma.OrdersProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrdersProduct
     */
    omit?: Prisma.OrdersProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrdersProductInclude<ExtArgs> | null;
    /**
     * Filter, which OrdersProduct to fetch.
     */
    where?: Prisma.OrdersProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrdersProducts to fetch.
     */
    orderBy?: Prisma.OrdersProductOrderByWithRelationInput | Prisma.OrdersProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for OrdersProducts.
     */
    cursor?: Prisma.OrdersProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrdersProducts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrdersProducts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of OrdersProducts.
     */
    distinct?: Prisma.OrdersProductScalarFieldEnum | Prisma.OrdersProductScalarFieldEnum[];
};
/**
 * OrdersProduct findFirstOrThrow
 */
export type OrdersProductFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersProduct
     */
    select?: Prisma.OrdersProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrdersProduct
     */
    omit?: Prisma.OrdersProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrdersProductInclude<ExtArgs> | null;
    /**
     * Filter, which OrdersProduct to fetch.
     */
    where?: Prisma.OrdersProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrdersProducts to fetch.
     */
    orderBy?: Prisma.OrdersProductOrderByWithRelationInput | Prisma.OrdersProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for OrdersProducts.
     */
    cursor?: Prisma.OrdersProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrdersProducts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrdersProducts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of OrdersProducts.
     */
    distinct?: Prisma.OrdersProductScalarFieldEnum | Prisma.OrdersProductScalarFieldEnum[];
};
/**
 * OrdersProduct findMany
 */
export type OrdersProductFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersProduct
     */
    select?: Prisma.OrdersProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrdersProduct
     */
    omit?: Prisma.OrdersProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrdersProductInclude<ExtArgs> | null;
    /**
     * Filter, which OrdersProducts to fetch.
     */
    where?: Prisma.OrdersProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrdersProducts to fetch.
     */
    orderBy?: Prisma.OrdersProductOrderByWithRelationInput | Prisma.OrdersProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing OrdersProducts.
     */
    cursor?: Prisma.OrdersProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrdersProducts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrdersProducts.
     */
    skip?: number;
    distinct?: Prisma.OrdersProductScalarFieldEnum | Prisma.OrdersProductScalarFieldEnum[];
};
/**
 * OrdersProduct create
 */
export type OrdersProductCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersProduct
     */
    select?: Prisma.OrdersProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrdersProduct
     */
    omit?: Prisma.OrdersProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrdersProductInclude<ExtArgs> | null;
    /**
     * The data needed to create a OrdersProduct.
     */
    data: Prisma.XOR<Prisma.OrdersProductCreateInput, Prisma.OrdersProductUncheckedCreateInput>;
};
/**
 * OrdersProduct createMany
 */
export type OrdersProductCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrdersProducts.
     */
    data: Prisma.OrdersProductCreateManyInput | Prisma.OrdersProductCreateManyInput[];
};
/**
 * OrdersProduct update
 */
export type OrdersProductUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersProduct
     */
    select?: Prisma.OrdersProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrdersProduct
     */
    omit?: Prisma.OrdersProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrdersProductInclude<ExtArgs> | null;
    /**
     * The data needed to update a OrdersProduct.
     */
    data: Prisma.XOR<Prisma.OrdersProductUpdateInput, Prisma.OrdersProductUncheckedUpdateInput>;
    /**
     * Choose, which OrdersProduct to update.
     */
    where: Prisma.OrdersProductWhereUniqueInput;
};
/**
 * OrdersProduct updateMany
 */
export type OrdersProductUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update OrdersProducts.
     */
    data: Prisma.XOR<Prisma.OrdersProductUpdateManyMutationInput, Prisma.OrdersProductUncheckedUpdateManyInput>;
    /**
     * Filter which OrdersProducts to update
     */
    where?: Prisma.OrdersProductWhereInput;
    /**
     * Limit how many OrdersProducts to update.
     */
    limit?: number;
};
/**
 * OrdersProduct upsert
 */
export type OrdersProductUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersProduct
     */
    select?: Prisma.OrdersProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrdersProduct
     */
    omit?: Prisma.OrdersProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrdersProductInclude<ExtArgs> | null;
    /**
     * The filter to search for the OrdersProduct to update in case it exists.
     */
    where: Prisma.OrdersProductWhereUniqueInput;
    /**
     * In case the OrdersProduct found by the `where` argument doesn't exist, create a new OrdersProduct with this data.
     */
    create: Prisma.XOR<Prisma.OrdersProductCreateInput, Prisma.OrdersProductUncheckedCreateInput>;
    /**
     * In case the OrdersProduct was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.OrdersProductUpdateInput, Prisma.OrdersProductUncheckedUpdateInput>;
};
/**
 * OrdersProduct delete
 */
export type OrdersProductDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersProduct
     */
    select?: Prisma.OrdersProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrdersProduct
     */
    omit?: Prisma.OrdersProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrdersProductInclude<ExtArgs> | null;
    /**
     * Filter which OrdersProduct to delete.
     */
    where: Prisma.OrdersProductWhereUniqueInput;
};
/**
 * OrdersProduct deleteMany
 */
export type OrdersProductDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which OrdersProducts to delete
     */
    where?: Prisma.OrdersProductWhereInput;
    /**
     * Limit how many OrdersProducts to delete.
     */
    limit?: number;
};
/**
 * OrdersProduct without action
 */
export type OrdersProductDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersProduct
     */
    select?: Prisma.OrdersProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrdersProduct
     */
    omit?: Prisma.OrdersProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrdersProductInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=OrdersProduct.d.ts.map