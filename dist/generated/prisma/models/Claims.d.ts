import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Claims
 *
 */
export type ClaimsModel = runtime.Types.Result.DefaultSelection<Prisma.$ClaimsPayload>;
export type AggregateClaims = {
    _count: ClaimsCountAggregateOutputType | null;
    _min: ClaimsMinAggregateOutputType | null;
    _max: ClaimsMaxAggregateOutputType | null;
};
export type ClaimsMinAggregateOutputType = {
    id: string | null;
    claim: string | null;
    user_id: string | null;
};
export type ClaimsMaxAggregateOutputType = {
    id: string | null;
    claim: string | null;
    user_id: string | null;
};
export type ClaimsCountAggregateOutputType = {
    id: number;
    claim: number;
    user_id: number;
    _all: number;
};
export type ClaimsMinAggregateInputType = {
    id?: true;
    claim?: true;
    user_id?: true;
};
export type ClaimsMaxAggregateInputType = {
    id?: true;
    claim?: true;
    user_id?: true;
};
export type ClaimsCountAggregateInputType = {
    id?: true;
    claim?: true;
    user_id?: true;
    _all?: true;
};
export type ClaimsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Claims to aggregate.
     */
    where?: Prisma.ClaimsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Claims to fetch.
     */
    orderBy?: Prisma.ClaimsOrderByWithRelationInput | Prisma.ClaimsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ClaimsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Claims from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Claims.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Claims
    **/
    _count?: true | ClaimsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ClaimsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ClaimsMaxAggregateInputType;
};
export type GetClaimsAggregateType<T extends ClaimsAggregateArgs> = {
    [P in keyof T & keyof AggregateClaims]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateClaims[P]> : Prisma.GetScalarType<T[P], AggregateClaims[P]>;
};
export type ClaimsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClaimsWhereInput;
    orderBy?: Prisma.ClaimsOrderByWithAggregationInput | Prisma.ClaimsOrderByWithAggregationInput[];
    by: Prisma.ClaimsScalarFieldEnum[] | Prisma.ClaimsScalarFieldEnum;
    having?: Prisma.ClaimsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClaimsCountAggregateInputType | true;
    _min?: ClaimsMinAggregateInputType;
    _max?: ClaimsMaxAggregateInputType;
};
export type ClaimsGroupByOutputType = {
    id: string;
    claim: string;
    user_id: string;
    _count: ClaimsCountAggregateOutputType | null;
    _min: ClaimsMinAggregateOutputType | null;
    _max: ClaimsMaxAggregateOutputType | null;
};
type GetClaimsGroupByPayload<T extends ClaimsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ClaimsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ClaimsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ClaimsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ClaimsGroupByOutputType[P]>;
}>>;
export type ClaimsWhereInput = {
    AND?: Prisma.ClaimsWhereInput | Prisma.ClaimsWhereInput[];
    OR?: Prisma.ClaimsWhereInput[];
    NOT?: Prisma.ClaimsWhereInput | Prisma.ClaimsWhereInput[];
    id?: Prisma.StringFilter<"Claims"> | string;
    claim?: Prisma.StringFilter<"Claims"> | string;
    user_id?: Prisma.StringFilter<"Claims"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type ClaimsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    claim?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type ClaimsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ClaimsWhereInput | Prisma.ClaimsWhereInput[];
    OR?: Prisma.ClaimsWhereInput[];
    NOT?: Prisma.ClaimsWhereInput | Prisma.ClaimsWhereInput[];
    claim?: Prisma.StringFilter<"Claims"> | string;
    user_id?: Prisma.StringFilter<"Claims"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type ClaimsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    claim?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    _count?: Prisma.ClaimsCountOrderByAggregateInput;
    _max?: Prisma.ClaimsMaxOrderByAggregateInput;
    _min?: Prisma.ClaimsMinOrderByAggregateInput;
};
export type ClaimsScalarWhereWithAggregatesInput = {
    AND?: Prisma.ClaimsScalarWhereWithAggregatesInput | Prisma.ClaimsScalarWhereWithAggregatesInput[];
    OR?: Prisma.ClaimsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ClaimsScalarWhereWithAggregatesInput | Prisma.ClaimsScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Claims"> | string;
    claim?: Prisma.StringWithAggregatesFilter<"Claims"> | string;
    user_id?: Prisma.StringWithAggregatesFilter<"Claims"> | string;
};
export type ClaimsCreateInput = {
    id?: string;
    claim: string;
    user: Prisma.UserCreateNestedOneWithoutClaimsInput;
};
export type ClaimsUncheckedCreateInput = {
    id?: string;
    claim: string;
    user_id: string;
};
export type ClaimsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    claim?: Prisma.StringFieldUpdateOperationsInput | string;
    user?: Prisma.UserUpdateOneRequiredWithoutClaimsNestedInput;
};
export type ClaimsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    claim?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ClaimsCreateManyInput = {
    id?: string;
    claim: string;
    user_id: string;
};
export type ClaimsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    claim?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ClaimsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    claim?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ClaimsListRelationFilter = {
    every?: Prisma.ClaimsWhereInput;
    some?: Prisma.ClaimsWhereInput;
    none?: Prisma.ClaimsWhereInput;
};
export type ClaimsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ClaimsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    claim?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type ClaimsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    claim?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type ClaimsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    claim?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type ClaimsCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ClaimsCreateWithoutUserInput, Prisma.ClaimsUncheckedCreateWithoutUserInput> | Prisma.ClaimsCreateWithoutUserInput[] | Prisma.ClaimsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ClaimsCreateOrConnectWithoutUserInput | Prisma.ClaimsCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ClaimsCreateManyUserInputEnvelope;
    connect?: Prisma.ClaimsWhereUniqueInput | Prisma.ClaimsWhereUniqueInput[];
};
export type ClaimsUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ClaimsCreateWithoutUserInput, Prisma.ClaimsUncheckedCreateWithoutUserInput> | Prisma.ClaimsCreateWithoutUserInput[] | Prisma.ClaimsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ClaimsCreateOrConnectWithoutUserInput | Prisma.ClaimsCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ClaimsCreateManyUserInputEnvelope;
    connect?: Prisma.ClaimsWhereUniqueInput | Prisma.ClaimsWhereUniqueInput[];
};
export type ClaimsUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ClaimsCreateWithoutUserInput, Prisma.ClaimsUncheckedCreateWithoutUserInput> | Prisma.ClaimsCreateWithoutUserInput[] | Prisma.ClaimsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ClaimsCreateOrConnectWithoutUserInput | Prisma.ClaimsCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ClaimsUpsertWithWhereUniqueWithoutUserInput | Prisma.ClaimsUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ClaimsCreateManyUserInputEnvelope;
    set?: Prisma.ClaimsWhereUniqueInput | Prisma.ClaimsWhereUniqueInput[];
    disconnect?: Prisma.ClaimsWhereUniqueInput | Prisma.ClaimsWhereUniqueInput[];
    delete?: Prisma.ClaimsWhereUniqueInput | Prisma.ClaimsWhereUniqueInput[];
    connect?: Prisma.ClaimsWhereUniqueInput | Prisma.ClaimsWhereUniqueInput[];
    update?: Prisma.ClaimsUpdateWithWhereUniqueWithoutUserInput | Prisma.ClaimsUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ClaimsUpdateManyWithWhereWithoutUserInput | Prisma.ClaimsUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ClaimsScalarWhereInput | Prisma.ClaimsScalarWhereInput[];
};
export type ClaimsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ClaimsCreateWithoutUserInput, Prisma.ClaimsUncheckedCreateWithoutUserInput> | Prisma.ClaimsCreateWithoutUserInput[] | Prisma.ClaimsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ClaimsCreateOrConnectWithoutUserInput | Prisma.ClaimsCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ClaimsUpsertWithWhereUniqueWithoutUserInput | Prisma.ClaimsUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ClaimsCreateManyUserInputEnvelope;
    set?: Prisma.ClaimsWhereUniqueInput | Prisma.ClaimsWhereUniqueInput[];
    disconnect?: Prisma.ClaimsWhereUniqueInput | Prisma.ClaimsWhereUniqueInput[];
    delete?: Prisma.ClaimsWhereUniqueInput | Prisma.ClaimsWhereUniqueInput[];
    connect?: Prisma.ClaimsWhereUniqueInput | Prisma.ClaimsWhereUniqueInput[];
    update?: Prisma.ClaimsUpdateWithWhereUniqueWithoutUserInput | Prisma.ClaimsUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ClaimsUpdateManyWithWhereWithoutUserInput | Prisma.ClaimsUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ClaimsScalarWhereInput | Prisma.ClaimsScalarWhereInput[];
};
export type ClaimsCreateWithoutUserInput = {
    id?: string;
    claim: string;
};
export type ClaimsUncheckedCreateWithoutUserInput = {
    id?: string;
    claim: string;
};
export type ClaimsCreateOrConnectWithoutUserInput = {
    where: Prisma.ClaimsWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClaimsCreateWithoutUserInput, Prisma.ClaimsUncheckedCreateWithoutUserInput>;
};
export type ClaimsCreateManyUserInputEnvelope = {
    data: Prisma.ClaimsCreateManyUserInput | Prisma.ClaimsCreateManyUserInput[];
};
export type ClaimsUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.ClaimsWhereUniqueInput;
    update: Prisma.XOR<Prisma.ClaimsUpdateWithoutUserInput, Prisma.ClaimsUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ClaimsCreateWithoutUserInput, Prisma.ClaimsUncheckedCreateWithoutUserInput>;
};
export type ClaimsUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.ClaimsWhereUniqueInput;
    data: Prisma.XOR<Prisma.ClaimsUpdateWithoutUserInput, Prisma.ClaimsUncheckedUpdateWithoutUserInput>;
};
export type ClaimsUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.ClaimsScalarWhereInput;
    data: Prisma.XOR<Prisma.ClaimsUpdateManyMutationInput, Prisma.ClaimsUncheckedUpdateManyWithoutUserInput>;
};
export type ClaimsScalarWhereInput = {
    AND?: Prisma.ClaimsScalarWhereInput | Prisma.ClaimsScalarWhereInput[];
    OR?: Prisma.ClaimsScalarWhereInput[];
    NOT?: Prisma.ClaimsScalarWhereInput | Prisma.ClaimsScalarWhereInput[];
    id?: Prisma.StringFilter<"Claims"> | string;
    claim?: Prisma.StringFilter<"Claims"> | string;
    user_id?: Prisma.StringFilter<"Claims"> | string;
};
export type ClaimsCreateManyUserInput = {
    id?: string;
    claim: string;
};
export type ClaimsUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    claim?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ClaimsUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    claim?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ClaimsUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    claim?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ClaimsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    claim?: boolean;
    user_id?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["claims"]>;
export type ClaimsSelectScalar = {
    id?: boolean;
    claim?: boolean;
    user_id?: boolean;
};
export type ClaimsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "claim" | "user_id", ExtArgs["result"]["claims"]>;
export type ClaimsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ClaimsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Claims";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        claim: string;
        user_id: string;
    }, ExtArgs["result"]["claims"]>;
    composites: {};
};
export type ClaimsGetPayload<S extends boolean | null | undefined | ClaimsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ClaimsPayload, S>;
export type ClaimsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ClaimsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ClaimsCountAggregateInputType | true;
};
export interface ClaimsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Claims'];
        meta: {
            name: 'Claims';
        };
    };
    /**
     * Find zero or one Claims that matches the filter.
     * @param {ClaimsFindUniqueArgs} args - Arguments to find a Claims
     * @example
     * // Get one Claims
     * const claims = await prisma.claims.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClaimsFindUniqueArgs>(args: Prisma.SelectSubset<T, ClaimsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ClaimsClient<runtime.Types.Result.GetResult<Prisma.$ClaimsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Claims that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClaimsFindUniqueOrThrowArgs} args - Arguments to find a Claims
     * @example
     * // Get one Claims
     * const claims = await prisma.claims.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClaimsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ClaimsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClaimsClient<runtime.Types.Result.GetResult<Prisma.$ClaimsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Claims that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimsFindFirstArgs} args - Arguments to find a Claims
     * @example
     * // Get one Claims
     * const claims = await prisma.claims.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClaimsFindFirstArgs>(args?: Prisma.SelectSubset<T, ClaimsFindFirstArgs<ExtArgs>>): Prisma.Prisma__ClaimsClient<runtime.Types.Result.GetResult<Prisma.$ClaimsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Claims that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimsFindFirstOrThrowArgs} args - Arguments to find a Claims
     * @example
     * // Get one Claims
     * const claims = await prisma.claims.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClaimsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ClaimsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClaimsClient<runtime.Types.Result.GetResult<Prisma.$ClaimsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Claims that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Claims
     * const claims = await prisma.claims.findMany()
     *
     * // Get first 10 Claims
     * const claims = await prisma.claims.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const claimsWithIdOnly = await prisma.claims.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ClaimsFindManyArgs>(args?: Prisma.SelectSubset<T, ClaimsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClaimsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Claims.
     * @param {ClaimsCreateArgs} args - Arguments to create a Claims.
     * @example
     * // Create one Claims
     * const Claims = await prisma.claims.create({
     *   data: {
     *     // ... data to create a Claims
     *   }
     * })
     *
     */
    create<T extends ClaimsCreateArgs>(args: Prisma.SelectSubset<T, ClaimsCreateArgs<ExtArgs>>): Prisma.Prisma__ClaimsClient<runtime.Types.Result.GetResult<Prisma.$ClaimsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Claims.
     * @param {ClaimsCreateManyArgs} args - Arguments to create many Claims.
     * @example
     * // Create many Claims
     * const claims = await prisma.claims.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ClaimsCreateManyArgs>(args?: Prisma.SelectSubset<T, ClaimsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Claims.
     * @param {ClaimsDeleteArgs} args - Arguments to delete one Claims.
     * @example
     * // Delete one Claims
     * const Claims = await prisma.claims.delete({
     *   where: {
     *     // ... filter to delete one Claims
     *   }
     * })
     *
     */
    delete<T extends ClaimsDeleteArgs>(args: Prisma.SelectSubset<T, ClaimsDeleteArgs<ExtArgs>>): Prisma.Prisma__ClaimsClient<runtime.Types.Result.GetResult<Prisma.$ClaimsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Claims.
     * @param {ClaimsUpdateArgs} args - Arguments to update one Claims.
     * @example
     * // Update one Claims
     * const claims = await prisma.claims.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ClaimsUpdateArgs>(args: Prisma.SelectSubset<T, ClaimsUpdateArgs<ExtArgs>>): Prisma.Prisma__ClaimsClient<runtime.Types.Result.GetResult<Prisma.$ClaimsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Claims.
     * @param {ClaimsDeleteManyArgs} args - Arguments to filter Claims to delete.
     * @example
     * // Delete a few Claims
     * const { count } = await prisma.claims.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ClaimsDeleteManyArgs>(args?: Prisma.SelectSubset<T, ClaimsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Claims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Claims
     * const claims = await prisma.claims.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ClaimsUpdateManyArgs>(args: Prisma.SelectSubset<T, ClaimsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Claims.
     * @param {ClaimsUpsertArgs} args - Arguments to update or create a Claims.
     * @example
     * // Update or create a Claims
     * const claims = await prisma.claims.upsert({
     *   create: {
     *     // ... data to create a Claims
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Claims we want to update
     *   }
     * })
     */
    upsert<T extends ClaimsUpsertArgs>(args: Prisma.SelectSubset<T, ClaimsUpsertArgs<ExtArgs>>): Prisma.Prisma__ClaimsClient<runtime.Types.Result.GetResult<Prisma.$ClaimsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Claims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimsCountArgs} args - Arguments to filter Claims to count.
     * @example
     * // Count the number of Claims
     * const count = await prisma.claims.count({
     *   where: {
     *     // ... the filter for the Claims we want to count
     *   }
     * })
    **/
    count<T extends ClaimsCountArgs>(args?: Prisma.Subset<T, ClaimsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ClaimsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Claims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClaimsAggregateArgs>(args: Prisma.Subset<T, ClaimsAggregateArgs>): Prisma.PrismaPromise<GetClaimsAggregateType<T>>;
    /**
     * Group by Claims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ClaimsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ClaimsGroupByArgs['orderBy'];
    } : {
        orderBy?: ClaimsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ClaimsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClaimsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Claims model
     */
    readonly fields: ClaimsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Claims.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ClaimsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Claims model
 */
export interface ClaimsFieldRefs {
    readonly id: Prisma.FieldRef<"Claims", 'String'>;
    readonly claim: Prisma.FieldRef<"Claims", 'String'>;
    readonly user_id: Prisma.FieldRef<"Claims", 'String'>;
}
/**
 * Claims findUnique
 */
export type ClaimsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claims
     */
    select?: Prisma.ClaimsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Claims
     */
    omit?: Prisma.ClaimsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClaimsInclude<ExtArgs> | null;
    /**
     * Filter, which Claims to fetch.
     */
    where: Prisma.ClaimsWhereUniqueInput;
};
/**
 * Claims findUniqueOrThrow
 */
export type ClaimsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claims
     */
    select?: Prisma.ClaimsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Claims
     */
    omit?: Prisma.ClaimsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClaimsInclude<ExtArgs> | null;
    /**
     * Filter, which Claims to fetch.
     */
    where: Prisma.ClaimsWhereUniqueInput;
};
/**
 * Claims findFirst
 */
export type ClaimsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claims
     */
    select?: Prisma.ClaimsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Claims
     */
    omit?: Prisma.ClaimsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClaimsInclude<ExtArgs> | null;
    /**
     * Filter, which Claims to fetch.
     */
    where?: Prisma.ClaimsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Claims to fetch.
     */
    orderBy?: Prisma.ClaimsOrderByWithRelationInput | Prisma.ClaimsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Claims.
     */
    cursor?: Prisma.ClaimsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Claims from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Claims.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Claims.
     */
    distinct?: Prisma.ClaimsScalarFieldEnum | Prisma.ClaimsScalarFieldEnum[];
};
/**
 * Claims findFirstOrThrow
 */
export type ClaimsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claims
     */
    select?: Prisma.ClaimsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Claims
     */
    omit?: Prisma.ClaimsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClaimsInclude<ExtArgs> | null;
    /**
     * Filter, which Claims to fetch.
     */
    where?: Prisma.ClaimsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Claims to fetch.
     */
    orderBy?: Prisma.ClaimsOrderByWithRelationInput | Prisma.ClaimsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Claims.
     */
    cursor?: Prisma.ClaimsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Claims from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Claims.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Claims.
     */
    distinct?: Prisma.ClaimsScalarFieldEnum | Prisma.ClaimsScalarFieldEnum[];
};
/**
 * Claims findMany
 */
export type ClaimsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claims
     */
    select?: Prisma.ClaimsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Claims
     */
    omit?: Prisma.ClaimsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClaimsInclude<ExtArgs> | null;
    /**
     * Filter, which Claims to fetch.
     */
    where?: Prisma.ClaimsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Claims to fetch.
     */
    orderBy?: Prisma.ClaimsOrderByWithRelationInput | Prisma.ClaimsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Claims.
     */
    cursor?: Prisma.ClaimsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Claims from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Claims.
     */
    skip?: number;
    distinct?: Prisma.ClaimsScalarFieldEnum | Prisma.ClaimsScalarFieldEnum[];
};
/**
 * Claims create
 */
export type ClaimsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claims
     */
    select?: Prisma.ClaimsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Claims
     */
    omit?: Prisma.ClaimsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClaimsInclude<ExtArgs> | null;
    /**
     * The data needed to create a Claims.
     */
    data: Prisma.XOR<Prisma.ClaimsCreateInput, Prisma.ClaimsUncheckedCreateInput>;
};
/**
 * Claims createMany
 */
export type ClaimsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Claims.
     */
    data: Prisma.ClaimsCreateManyInput | Prisma.ClaimsCreateManyInput[];
};
/**
 * Claims update
 */
export type ClaimsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claims
     */
    select?: Prisma.ClaimsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Claims
     */
    omit?: Prisma.ClaimsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClaimsInclude<ExtArgs> | null;
    /**
     * The data needed to update a Claims.
     */
    data: Prisma.XOR<Prisma.ClaimsUpdateInput, Prisma.ClaimsUncheckedUpdateInput>;
    /**
     * Choose, which Claims to update.
     */
    where: Prisma.ClaimsWhereUniqueInput;
};
/**
 * Claims updateMany
 */
export type ClaimsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Claims.
     */
    data: Prisma.XOR<Prisma.ClaimsUpdateManyMutationInput, Prisma.ClaimsUncheckedUpdateManyInput>;
    /**
     * Filter which Claims to update
     */
    where?: Prisma.ClaimsWhereInput;
    /**
     * Limit how many Claims to update.
     */
    limit?: number;
};
/**
 * Claims upsert
 */
export type ClaimsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claims
     */
    select?: Prisma.ClaimsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Claims
     */
    omit?: Prisma.ClaimsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClaimsInclude<ExtArgs> | null;
    /**
     * The filter to search for the Claims to update in case it exists.
     */
    where: Prisma.ClaimsWhereUniqueInput;
    /**
     * In case the Claims found by the `where` argument doesn't exist, create a new Claims with this data.
     */
    create: Prisma.XOR<Prisma.ClaimsCreateInput, Prisma.ClaimsUncheckedCreateInput>;
    /**
     * In case the Claims was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ClaimsUpdateInput, Prisma.ClaimsUncheckedUpdateInput>;
};
/**
 * Claims delete
 */
export type ClaimsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claims
     */
    select?: Prisma.ClaimsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Claims
     */
    omit?: Prisma.ClaimsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClaimsInclude<ExtArgs> | null;
    /**
     * Filter which Claims to delete.
     */
    where: Prisma.ClaimsWhereUniqueInput;
};
/**
 * Claims deleteMany
 */
export type ClaimsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Claims to delete
     */
    where?: Prisma.ClaimsWhereInput;
    /**
     * Limit how many Claims to delete.
     */
    limit?: number;
};
/**
 * Claims without action
 */
export type ClaimsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claims
     */
    select?: Prisma.ClaimsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Claims
     */
    omit?: Prisma.ClaimsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClaimsInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Claims.d.ts.map